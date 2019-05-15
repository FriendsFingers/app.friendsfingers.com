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
                <b-nav-item :to="$withBase('/members')">Members</b-nav-item>
                <b-nav-item :to="$withBase('/faucet')">Faucet</b-nav-item>
            </b-navbar-nav>

            <b-navbar-nav class="ml-auto">
                <b-nav-item v-if="address === ''" :to="$withBase('/dashboard')">Connect</b-nav-item>
                <b-nav-item-dropdown v-else :text="address | truncate(12)" right>
                    <b-dropdown-item :to="$withBase('/dashboard')">Your profile</b-dropdown-item>
                    <b-dropdown-item @click="disconnect()">Disconnect</b-dropdown-item>
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
      address: {
        get () {
          return this.$store.getters.address;
        },
      },
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
    },
    async mounted () {
      if (!this.metamask.installed) {
        this.makeToast(
          'No Ethereum Provider',
          `Please install MetaMask ${(this.isMobile()) ? 'or a mobile browser like Trust Wallet or Coinbase Wallet' : ''} to use DApp.`,
          'warning',
        );
      } else if (this.metamask.netId !== this.network.current.id) {
        this.makeToast(
          'Wrong Network',
          `You are on the wrong Network. Please switch your Ethereum Provider on ${this.network.current.name}.`,
          'warning',
        );
      }
    },
    methods: {
      disconnect () {
        this.$store.dispatch('disconnect');
      },
    },
  };
</script>
