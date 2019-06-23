<template>
    <b-container>
        <b-row class="masthead m-4">
            <b-col lg="8" offset-lg="2">
                <h1 class="display-5">
                    <b-img :src="$withBase('/assets/images/logo/shaka_logo_white.png')"
                           rounded="circle"
                           height="64"
                           :alt="$site.title" />
                    <br>
                    Shaka Tokens Dealer
                </h1>
                <h4 class="text-muted">{{ $page.frontmatter.description }}</h4>
            </b-col>
        </b-row>
        <b-row v-if="!loading">
            <b-col v-if="trx.hash" lg="12" class="mb-2">
                <b-alert show variant="success" class="mt-3">
                    Last transaction:
                    <b-link :href="trx.link" target="_blank">{{ trx.hash }}</b-link>
                </b-alert>
            </b-col>
            <b-col lg="8" offset-lg="2">
                <b-card header="Get Shaka Tokens using your Web3 Wallet" class="mt-4">
                    <p>
                        Default rate is <strong>{{ dealer.rate }} {{ token.symbol }}/ETH</strong><br>
                        If you have joined our DAO you will have a <strong>+100% bonus</strong>.<br>
                        If you have staked tokens you will have a <strong>+300% bonus</strong>.
                    </p>

                    <b-form @submit.prevent="buyTokens">
                        <b-input-group>
                            <b-form-input
                                    id="ethAmount"
                                    name="ethAmount"
                                    :disabled="makingTransaction"
                                    v-model.trim="ethAmount"
                                    v-validate="{ required: true, decimal: 18, min_value: 0.01 }"
                                    data-vv-as="ETH amount"
                                    @keyup="getExpectedTokenAmount"
                                    :class="{'is-invalid': errors.has('ethAmount')}">
                            </b-form-input>
                            <b-input-group-append>
                                <b-button :disabled="makingTransaction" type="submit" variant="primary">
                                    Send ETH
                                </b-button>
                            </b-input-group-append>
                        </b-input-group>
                        <b-form-valid-feedback v-if="dealer.expectedTokenAmount > 0" :state="true">
                            You'll receive {{ dealer.expectedTokenAmount }} {{ token.symbol }}
                        </b-form-valid-feedback>
                        <b-form-text v-else>
                            Insert the amount of ETH you want to send and we will calculate your rate.
                        </b-form-text>
                        <small v-show="errors.has('ethAmount')" class="text-danger">
                            {{ errors.first('ethAmount') }}
                        </small>
                    </b-form>
                </b-card>

                <b-card header="Or use your preferred wallet" no-body class="mt-4">
                    <b-media>
                        <b-img slot="aside" fluid-grow :src="dealer.qrcode" :alt="dealer.address" />
                        <h4 class="card-title my-3">Send ETH to the following address</h4>
                        <h6 class="card-subtitle text-muted address">{{ dealer.address }}</h6>
                        <b-link class="text-muted"
                                :href="dapp.network.current.etherscanLink + '/address/' + dealer.address"
                                target="_blank">
                            <small>View on Etherscan</small>
                        </b-link>
                    </b-media>

                    <b-alert show variant="warning" class="mb-0">
                        NOTE: Do not send ETH from exchange like Coinbase, Bittrex, Bitfinex or similar.
                        They don’t give you full access to your wallet so sending ETH from one of these
                        means for you losing your tokens and we won’t be able to help you to recover them.
                    </b-alert>
                </b-card>
            </b-col>
        </b-row>
        <template v-else>
            <ui--loader :loading="true"></ui--loader>
        </template>
    </b-container>
</template>

<script>
  import utils from '../mixins/utils.mixin';

  export default {
    name: 'Dealer',
    mixins: [
      utils,
    ],
    data () {
      return {
        loading: true,
        makingTransaction: false,
        ethAmount: '',
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
        dealer: {
          address: '',
          qrcode: '',
          rate: 0,
          expectedTokenAmount: 0,
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
      this.initDealer();
    },
    methods: {
      initDealer () {
        try {
          this.$store.dispatch('initToken');
          this.$store.dispatch('initDealer');
          this.$store.dispatch('initContributions');

          this.ready();
        } catch (e) {
          alert(e);
          document.location.href = this.$withBase('/');
        }
      },
      async ready () {
        await this.getTokenData();
        await this.getDealerData();

        this.loading = false;
      },
      async getTokenData () {
        try {
          this.token.name = await this.promisify(this.dapp.instances.token.name);
          this.token.symbol = await this.promisify(this.dapp.instances.token.symbol);
          this.token.link = this.dapp.network.current.etherscanLink + '/token/' + this.dapp.instances.token.address;
          this.token.logo = this.$withBase('/assets/images/logo/shaka_logo_white.png');
        } catch (e) {
          this.loading = false;
          console.log(e); // eslint-disable-line no-console
          alert('Some error occurred.');
        }
      },
      async getDealerData () {
        try {
          this.dealer.address = this.dapp.instances.dealer.address;
          this.dealer.qrcode = await this.generateQRCode(this.dealer.address);
          this.dealer.rate = parseFloat(await this.promisify(this.dapp.instances.dealer.rate));
        } catch (e) {
          this.loading = false;
          console.log(e); // eslint-disable-line no-console
          alert('Some error occurred.');
        }
      },
      async getExpectedTokenAmount () {
        this.dealer.expectedTokenAmount = parseFloat(
          this.dapp.web3.fromWei(
            await this.promisify(
              this.dapp.instances.dealer.expectedTokenAmount,
              this.dapp.metamask.address,
              this.dapp.web3.toWei(this.ethAmount)
            )
          )
        );
      },
      buyTokens () {
        this.$validator.validate('ethAmount').then((result) => {
          if (result) {
            if (!this.dapp.metamask.installed) {
              alert('Please verify that you have MetaMask installed and unlocked.');
              return;
            }

            if (this.dapp.metamask.netId !== this.dapp.network.current.id) {
              alert(`You are on the wrong Network. Please switch MetaMask on ${this.dapp.network.current.name}.`);
              return;
            }

            try {
              this.makingTransaction = true;

              this.dapp.instances.dealer.buyTokens(
                {
                  value: this.dapp.web3.toWei(this.ethAmount),
                  from: this.dapp.metamask.address,
                  to: this.dapp.instances.dealer.address,
                },
                (err, trxHash) => {
                  if (!err) {
                    this.trx.hash = trxHash;
                    this.trx.link = this.dapp.network.current.etherscanLink + '/tx/' + this.trx.hash;
                  } else {
                    alert('Some error occurred. Maybe you rejected the transaction or you have MetaMask locked!');
                  }
                  this.makingTransaction = false;
                },
              );
            } catch (e) {
              console.log(e); // eslint-disable-line no-console
              alert('Cannot connect. Please verify that you have MetaMask installed and unlocked.');
            }
          }
        }).catch((e) => {
          console.log(e); // eslint-disable-line no-console
          this.makingTransaction = false;
          alert('Some error occurred.');
        });
      },
    },
  };
</script>
