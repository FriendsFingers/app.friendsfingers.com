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
                <b-nav-item>
                    <b-badge variant="success"> {{ network.default }}</b-badge>
                </b-nav-item>
                <b-nav-item v-if="address === ''" @click="connect()">Connect</b-nav-item>
                <b-nav-item v-else :to="$withBase('/dashboard')">{{ address }}</b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
  export default {
    name: 'Header',
    computed: {
      address: {
        get () {
          return this.$store.getters['address'];
        },
      },
      network: {
        get () {
          return this.$store.getters['network'];
        },
      },
      metamask: {
        get () {
          return this.$store.getters['metamask'];
        },
      },
    },
    methods: {
      connect () {
        this.$store.dispatch('connect');
      },
    },
  };
</script>
