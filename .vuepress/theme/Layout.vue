<template>
    <client-only>
        <div>
            <a href="https://www.friendsfingers.com">Redirecting...</a>
        </div>
    </client-only>
</template>

<script>
  export default {
    mounted () {
      document.location.href = 'https://www.friendsfingers.com' + window.location.pathname + window.location.search;
    },
  };
</script>