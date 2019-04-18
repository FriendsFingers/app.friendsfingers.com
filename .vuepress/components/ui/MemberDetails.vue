<template>
    <b-row>
        <b-col lg="12">
            <template v-if="loading">
                <b-card class="mb-3">
                    <ui--loader :loading="true"></ui--loader>
                </b-card>
            </template>
            <template v-else-if="member">
                <b-row>
                    <b-col md="4" class="mb-4">
                        <b-card no-body class="text-center">
                            <ui--member-image :member="member"></ui--member-image>
                        </b-card>
                    </b-col>
                    <b-col md="8" class="mb-4">
                        <b-list-group>
                            <b-list-group-item>ID: {{ member.id }}</b-list-group-item>
                            <b-list-group-item>Address:
                                <b-link :href="`${network.current.etherscanLink}/address/${member.address}`"
                                        target="_blank">
                                    {{ member.address }}
                                </b-link>
                            </b-list-group-item>
                            <b-list-group-item>Staked tokens: {{ member.stakedTokens }} {{ token.symbol }}
                            </b-list-group-item>
                            <b-list-group-item>Verified: {{ member.verified ? 'Yes' : 'No' }}</b-list-group-item>
                            <b-list-group-item>Member since: {{ member.creationDate | formatLocaleDate }}
                            </b-list-group-item>
                        </b-list-group>
                    </b-col>
                </b-row>
            </template>
            <template v-else>
                <b-card-body>
                    No member found.
                </b-card-body>
            </template>
        </b-col>
    </b-row>
</template>

<script>
  import browser from '../../mixins/browser';
  import dapp from '../../mixins/dapp';

  export default {
    name: 'MemberDetails',
    props: [
      'mainColor',
      'backgroundColor',
      'borderColor',
      'message',
      'showMessage',
    ],
    mixins: [
      browser,
      dapp,
    ],
    data () {
      return {
        loading: true,
        memberId: 0,
        token: {
          name: '',
          symbol: '',
          decimals: 18,
          link: '',
          logo: '',
        },
        member: null,
      };
    },
    async mounted () {
      this.memberId = this.getParam('id');

      this.currentNetwork = this.network.default;
      await this.initDapp();
    },
    methods: {
      async initDapp () {
        this.network.current = this.network.list[this.currentNetwork];
        try {
          await this.initWeb3(this.currentNetwork, true);
          this.initContracts();
        } catch (e) {
          alert(e);
          document.location.href = this.$withBase('/');
        }
      },
      async ready () {
        await this.getTokenData();
        await this.getMember();
      },
      async getTokenData () {
        try {
          this.token.name = await this.promisify(this.instances.token.name);
          this.token.symbol = await this.promisify(this.instances.token.symbol);
          this.token.link = this.network.current.etherscanLink + '/token/' + this.instances.token.address;
          this.token.logo = this.$withBase('/assets/images/logo/shaka_logo_white.png');
        } catch (e) {
          console.log(e); // eslint-disable-line no-console
          this.loading = false;
          alert('Some error occurred.');
        }
      },
      async getMember () {
        const struct = await this.promisify(this.instances.dao.getMemberById, this.memberId);
        this.member = this.formatStructure(struct);

        this.loading = false;
      },
      formatStructure (struct) {
        const memberId = parseInt(struct[0].valueOf());

        if (memberId === 0) {
          return null;
        }

        return {
          id: parseInt(struct[0].valueOf()),
          address: struct[1],
          fingerprint: this.formatFingerprint(struct[2]),
          creationDate: struct[3].valueOf() * 1000,
          stakedTokens: this.web3.fromWei(struct[4]),
          data: struct[5],
          verified: struct[6],
        };
      },
      formatFingerprint (fingerprint) {
        const chunk = fingerprint.replace('0x', '').match(new RegExp('.{1,6}', 'g'));

        return {
          borderColor: `#${chunk[0]}`,
          backgroundColor: `#${chunk[1]}`,
          mainColor: `#${chunk[2]}`,
        };
      },
    },
  };
</script>
