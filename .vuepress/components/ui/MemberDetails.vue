<template>
    <b-row>
        <b-col md="4" class="mb-4">
            <b-card no-body class="text-center">
                <ui--member-image :member="member"></ui--member-image>
            </b-card>
        </b-col>
        <b-col md="8" class="mb-4">
            <b-list-group>
                <b-list-group-item>ID: {{ member.id }}</b-list-group-item>
                <b-list-group-item>Address:
                    <b-link :href="`${network.current.etherscanLink}/address/${member.address}`"
                            target="_blank">
                        {{ member.address }}
                    </b-link>
                </b-list-group-item>
                <b-list-group-item>Staked tokens: {{ member.stakedTokens }} {{ token.symbol }}
                </b-list-group-item>
                <b-list-group-item>Verified: {{ member.verified ? 'Yes' : 'No' }}</b-list-group-item>
                <b-list-group-item>Member since: {{ member.creationDate | formatLocaleDate }}
                </b-list-group-item>
            </b-list-group>
        </b-col>
    </b-row>
</template>

<script>
  export default {
    name: 'MemberDetails',
    props: [
      'network',
      'member',
      'token',
    ],
  };
</script>
