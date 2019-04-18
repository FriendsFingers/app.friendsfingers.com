<template>
    <b-container>
        <b-row class="mt-4">
            <b-col md="2" sm="4" v-for="item in memberList" :key="item.id" class="p-2">
                <b-link :to="{ path: '/member/', query: { id: item.id } }">
                    <ui--member-image :member="item"></ui--member-image>
                </b-link>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
  import browser from '../mixins/browser';
  import dapp from '../mixins/dapp';

  export default {
    name: 'Members',
    mixins: [
      browser,
      dapp,
    ],
    data () {
      return {
        memberList: [],
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
        this.loading = false;
        this.membersNumber = parseInt((await this.promisify(this.instances.dao.membersNumber)).valueOf());

        await this.getMember(1);
      },
      async getMember (memberId) {
        const struct = await this.promisify(this.instances.dao.getMemberById, memberId);
        const member = this.formatStructure(struct);

        this.memberList.push(member);

        if (this.memberList.length < this.membersNumber) {
          this.getMember(this.memberList.length + 1);
        }
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
