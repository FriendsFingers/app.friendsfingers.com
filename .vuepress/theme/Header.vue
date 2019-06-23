<template>
    <b-navbar toggleable="md" variant="light" fixed="top" :sticky="true">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand to="/">
            <b-img :src="$withBase('/assets/images/logo/friendsfingers.svg')"
                   rounded="circle"
                   height="24"
                   :alt="$site.title"/>
            {{ $site.title }}
        </b-navbar-brand>

        <b-badge variant="danger">beta</b-badge>

        <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav>
                <b-nav-item :to="$withBase('/dao')">DAO</b-nav-item>
                <b-nav-item :to="$withBase('/dealer')">Dealer</b-nav-item>
                <b-nav-item :to="$withBase('/faucet')">Faucet</b-nav-item>
            </b-navbar-nav>

            <b-navbar-nav class="ml-auto">
                <b-nav-item href="https://medium.com/friendsfingers" target="_blank">Blog</b-nav-item>
                <b-nav-item href="https://www.friendsfingers.com" target="_blank">FriendsFingers</b-nav-item>
                <b-nav-item v-if="dapp.metamask.address === ''" :to="$withBase('/dashboard')">Connect</b-nav-item>
                <b-nav-item-dropdown v-else :text="dapp.metamask.address | truncate(12)" right>
                    <b-dropdown-item :to="$withBase('/dashboard')">Dashboard</b-dropdown-item>
                    <!--<b-dropdown-item @click="disconnect()">Disconnect</b-dropdown-item>-->
                </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
  import utils from '../mixins/utils.mixin';

  export default {
    name: 'Header',
    mixins: [
      utils,
    ],
    computed: {
      dapp: {
        get () {
          return this.$store.getters.dapp;
        },
      },
    },
    created () {
      setTimeout(() => {
        if (!this.dapp.metamask.installed) {
          this.makeToast(
            'No Ethereum Provider',
            `Please install MetaMask ${(this.isMobile()) ? 'or a mobile Web3 browser' : ''} to use DApp.`, // eslint-disable-line max-len
            'warning',
          );
        } else if (this.dapp.metamask.netId !== this.dapp.network.current.id) {
          this.makeToast(
            'Wrong Network',
            `You are on the wrong Network. Please switch your Ethereum Provider on ${this.dapp.network.current.name}.`,
            'warning',
          );
        }
      }, 2000);
    },
    methods: {
      disconnect () {
        this.$store.dispatch('disconnect');
      },
    },
  };
</script>
