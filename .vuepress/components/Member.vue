<template>
    <b-container>
        <b-row class="mt-4">
            <b-col lg="10" offset-lg="1">
                <template v-if="loading">
                    <b-card class="mb-3">
                        <ui--loader :loading="true"></ui--loader>
                    </b-card>
                </template>
                <template v-else-if="member">
                    <ui--member-details :member="member" :token="token" :network="network"></ui--member-details>
                </template>
                <template v-else>
                    <b-card-body>
                        No member found.
                    </b-card-body>
                </template>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
  import browser from '../mixins/browser';
  import dappMixin from '../mixins/dapp.mixin';

  export default {
    name: 'Member',
    mixins: [
      browser,
      dappMixin,
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
    computed: {
      network: {
        get () {
          return this.$store.getters['network'];
        },
      },
    },
    async mounted () {
      this.memberId = this.getParam('id');

      await this.initDapp();
    },
    methods: {
      async initDapp () {
        try {
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
    },
  };
</script>
