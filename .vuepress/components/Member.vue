<template>
    <b-container>
        <b-row class="mt-4">
            <b-col lg="10" offset-lg="1">
                <template v-if="loading">
                    <b-card class="mb-3">
                        <ui--loader :loading="true"></ui--loader>
                    </b-card>
                </template>
                <template v-else-if="account.member">
                    <ui--member-details :account="account" :token="token"></ui--member-details>
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
  import utils from '../mixins/utils.mixin';

  export default {
    name: 'Member',
    mixins: [
      utils,
    ],
    data () {
      return {
        loading: true,
        token: {
          name: '',
          symbol: '',
          decimals: 18,
          link: '',
          logo: '',
        },
        account: {
          isMember: false,
          memberId: 0,
          tokenBalance: 0,
          member: null,
        },
      };
    },
    computed: {
      dapp: {
        get () {
          return this.$store.getters.dapp;
        },
      },
    },
    mounted () {
      this.account.memberId = this.getParam('id');

      this.initDapp();
    },
    methods: {
      initDapp () {
        try {
          this.$store.dispatch('initToken');
          this.$store.dispatch('initDao');

          this.ready();
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
          this.token.name = await this.promisify(this.dapp.instances.token.name);
          this.token.symbol = await this.promisify(this.dapp.instances.token.symbol);
          this.token.link = this.dapp.network.current.etherscanLink + '/token/' + this.dapp.instances.token.address;
          this.token.logo = this.$withBase('/assets/images/logo/shaka_logo_white.png');
        } catch (e) {
          console.log(e); // eslint-disable-line no-console
          this.loading = false;
          alert('Some error occurred.');
        }
      },
      async getMember () {
        const struct = await this.promisify(this.dapp.instances.dao.getMemberById, this.account.memberId);
        this.account.member = this.formatStructure(struct);

        if (this.account.member) {
          this.account.tokenBalance = parseFloat(
            this.dapp.web3.fromWei(
              await this.promisify(this.dapp.instances.token.balanceOf, this.account.member.address),
            ),
          );
        }

        this.loading = false;
      },
    },
  };
</script>
