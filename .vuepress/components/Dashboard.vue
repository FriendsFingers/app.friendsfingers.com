<template>
    <b-container>
        <b-row class="mt-4">
            <b-col lg="10" offset-lg="1">
                <template v-if="loading">
                    <b-card class="mb-3">
                        <ui--loader :loading="true"></ui--loader>
                    </b-card>
                </template>
                <template v-else>
                    <template v-if="metamask.address">
                        <template v-if="!loadingData">
                            <template v-if="account.member">
                                <ui--member-details :member="account.member" :token="token"
                                                    :network="network"></ui--member-details>
                            </template>
                            <template v-else>
                                <b-card header="Your account" class="mb-3">
                                    <b>Account:</b>
                                    <b-link :href="`${network.current.etherscanLink}/address/${account.address}`"
                                            target="_blank">{{ account.address }}
                                    </b-link>
                                </b-card>
                                <b-card header="FriendsFingers DAO" class="mb-3">
                                    <b-btn variant="primary"
                                           size="lg"
                                           :disabled="makingTransaction"
                                           @click="join">
                                        Join DAO
                                    </b-btn>

                                    <br>

                                    <b-alert show v-if="trx.hash" variant="success" class="mt-3">
                                        Last transaction:
                                        <b-link :href="trx.link" target="_blank">{{ trx.hash }}</b-link>
                                    </b-alert>
                                </b-card>
                            </template>
                        </template>
                        <template v-else>
                            <ui--loader :loading="true"></ui--loader>
                        </template>
                    </template>
                    <template v-else>
                        <b-card header="Your account" class="mb-3">
                            <b-alert show v-if="!metamask.installed || metamask.netId !== network.current.id"
                                     variant="warning">
                                <template v-if="!metamask.installed">
                                    Install
                                    <b-link href="https://metamask.io/" target="_blank">MetaMask</b-link>
                                    or a mobile browser like
                                    <b-link href="https://trustwallet.com/" target="_blank">Trust Wallet</b-link>
                                    or
                                    <b-link href="https://wallet.coinbase.com/" target="_blank">Coinbase Wallet</b-link>
                                    to get your Tokens.
                                </template>
                                <template v-else-if="metamask.netId !== network.current.id">
                                    You are on the wrong Network.<br>
                                    Please switch your Ethereum Provider on <b>{{ network.current.name }}</b>.
                                </template>
                            </b-alert>
                            <p v-else class="card-text">
                                <b-btn variant="primary"
                                       size="lg"
                                       :disabled="!metamask.installed || metamask.netId !== network.current.id"
                                       @click="enable">
                                    Connect
                                </b-btn>
                            </p>
                        </b-card>
                    </template>
                </template>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
  import utils from '../mixins/utils.mixin';
  import dappMixin from '../mixins/dapp.mixin';

  export default {
    name: 'Dashboard',
    mixins: [
      utils,
      dappMixin,
    ],
    data () {
      return {
        loading: true,
        loadingData: false,
        makingTransaction: false,
        trx: {
          hash: '',
          link: '',
        },
        token: {
          name: '',
          symbol: '',
          decimals: 18,
          link: '',
          logo: '',
        },
        account: {
          isMember: false,
          address: '',
          memberId: 0,
          member: null,
        },
      };
    },
    computed: {
      network: {
        get () {
          return this.$store.getters.network;
        },
      },
      metamask: {
        get () {
          return this.$store.getters.metamask;
        },
      },
      web3: {
        get () {
          return this.$store.getters.web3;
        },
      },
    },
    async mounted () {
      await this.initDapp();
    },
    methods: {
      async initDapp () {
        try {
          this.initToken();
          this.initDao();

          this.ready();
        } catch (e) {
          alert(e);
          document.location.href = this.$withBase('/');
        }
      },
      async ready () {
        await this.getTokenData();
        await this.getAccountData();

        this.loading = false;
      },
      async enable () {
        await this.$store.dispatch('connect');
        await this.getAccountData();
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
      async getAccountData () {
        this.loadingData = true;
        try {
          if (this.metamask.address) {
            this.account.address = this.web3.eth.accounts[0];
          }

          this.account.isMember = await this.promisify(this.instances.dao.isMember, this.account.address);

          if (this.account.isMember) {
            const struct = await this.promisify(this.instances.dao.getMemberByAddress, this.account.address);
            this.account.member = this.formatStructure(struct);
          }

          this.loadingData = false;
        } catch (e) {
          console.log(e); // eslint-disable-line no-console
          this.loadingData = false;
          alert('Some error occurred.');
        }
      },
      async join () {
        try {
          this.makingTransaction = true;

          this.web3.eth.sendTransaction({
              value: 0,
              from: this.account.address,
              to: this.instances.dao.address,
            },
            (err, trxHash) => {
              if (!err) {
                this.trx.hash = trxHash;
                this.trx.link = this.network.current.etherscanLink + '/tx/' + this.trx.hash;
              } else {
                alert('Some error occurred. Maybe you rejected the transaction or you have MetaMask locked!');
              }
            },
          );
        } catch (e) {
          console.log(e);
          alert('Cannot connect. Please verify that you have MetaMask installed and unlocked.');
        }
      },
    },
  };
</script>
