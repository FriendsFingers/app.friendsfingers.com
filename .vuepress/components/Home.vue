<template>
    <div>
        <b-row class="masthead main m-0">
            <b-col lg="8" offset-lg="2">
                <h1 class="display-5">
                    <b-img :src="$withBase('/assets/images/logo/friendsfingers.svg')"
                           rounded="circle"
                           height="64"
                           :alt="$site.title"/>
                    <br>
                    {{ $site.title }}
                </h1>
                <h4 class="text-muted">{{ $page.title }}</h4>
                <p class="lead">{{ $site.description }}</p>
            </b-col>
        </b-row>
        <b-row class="masthead purple m-0">
            <b-col lg="8" offset-lg="2">
                <h1 class="display-4">
                    <b-img :src="$withBase('/assets/images/logo/shaka_logo_white.png')"
                           rounded="circle"
                           height="64"
                           alt="Shaka Token"/>
                    <br>
                    Shaka Token
                </h1>
                <p class="lead mt-5">
                    Shaka Tokens will make you part of FriendsFingers' Decentralized Autonomous Organization (DAO).
                </p>
            </b-col>
        </b-row>
        <b-row class="masthead white m-0">
            <b-col lg="8" offset-lg="2">
                <h4 class="display-5">We are distributing Shaka to grow our DAO</h4>
                <p class="lead mt-5">
                    <b-btn variant="primary" size="lg" :to="$withBase('/faucet')">Get FREE Shaka</b-btn>
                </p>
            </b-col>
        </b-row>
    </div>
</template>

<script>
  export default {
    name: 'Home',
  };
</script>
