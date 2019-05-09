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
  import dappMixin from '../mixins/dapp.mixin';

  export default {
    name: 'Members',
    mixins: [
      browser,
      dappMixin,
    ],
    data () {
      return {
        memberList: [],
      };
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
    },
  };
</script>
