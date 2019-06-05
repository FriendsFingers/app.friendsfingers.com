<template>
    <b-container>
        <b-row class="masthead m-4">
            <b-col lg="8" offset-lg="2">
                <h1 class="display-5">
                    <b-img :src="$withBase('/assets/images/logo/friendsfingers.svg')"
                           rounded="circle"
                           height="64"
                           :alt="$site.title"/>
                    <br>
                    FriendsFingers DAO
                </h1>
                <h4 v-if="!loading" class="text-muted">
                    <b>{{ dao.membersNumber }}</b> DAO Members<br>
                    <b>{{ dao.totalStakedTokens }} {{ token.symbol }}</b> Staked<br>
                    <b>{{ dao.totalUsedTokens }} {{ token.symbol }}</b> Used
                </h4>
            </b-col>
        </b-row>
        <b-row v-if="!loading">
            <b-col lg="10" offset-lg="1">
                <b-row class="mt-2">
                    <b-col md="3" sm="4" v-for="item in memberList" :key="item.id" class="p-2">
                        <b-card no-body>
                            <b-card-body>
                                <b-link :to="{ path: '/member/', query: { id: item.id } }">
                                    <ui--member-image :member="item"></ui--member-image>
                                </b-link>
                            </b-card-body>

                            <b-card-footer>
                                #{{ item.id }}

                                <div class="float-right">
                                    <b-badge v-if="item.approved"
                                             v-b-tooltip.hover
                                             title="Approved"
                                             variant="success"
                                             pill
                                             class="p-1">
                                        <font-awesome-icon icon="check-circle"></font-awesome-icon>
                                    </b-badge>
                                    <b-badge v-else
                                             v-b-tooltip.hover
                                             title="Not approved"
                                             variant="danger"
                                             pill
                                             class="p-1">
                                        <font-awesome-icon icon="exclamation-circle"></font-awesome-icon>
                                    </b-badge>
                                </div>
                            </b-card-footer>
                        </b-card>
                    </b-col>
                </b-row>
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
    name: 'Dao',
    mixins: [
      utils,
    ],
    data () {
      return {
        loading: true,
        memberList: [],
        token: {
          name: '',
          symbol: '',
          decimals: 18,
          link: '',
          logo: '',
        },
        dao: {
          membersNumber: 0,
          totalStakedTokens: 0,
          totalUsedTokens: 0,
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
      this.memberId = this.getParam('id');

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
        await this.getDaoData();
        await this.getTokenData();

        this.loading = false;

        await this.getMember(1);
      },
      async getDaoData () {
        try {
          this.dao.membersNumber = parseInt((await this.promisify(this.dapp.instances.dao.membersNumber)).valueOf());
          this.dao.totalStakedTokens = parseFloat(
            this.dapp.web3.fromWei(
              await this.promisify(this.dapp.instances.dao.totalStakedTokens),
            ),
          );
          this.dao.totalUsedTokens = parseFloat(
            this.dapp.web3.fromWei(
              await this.promisify(this.dapp.instances.dao.totalUsedTokens),
            ),
          );
        } catch (e) {
          this.loading = false;
          console.log(e); // eslint-disable-line no-console
          alert('Some error occurred.');
        }
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
      async getMember (memberId) {
        const struct = await this.promisify(this.dapp.instances.dao.getMemberById, memberId);
        const member = this.formatStructure(struct);

        this.memberList.push(member);

        if (this.memberList.length < this.dao.membersNumber) {
          this.getMember(this.memberList.length + 1);
        }
      },
    },
  };
</script>
