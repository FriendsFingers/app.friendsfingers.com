module.exports = {
  title: 'FriendsFingers',
  description: 'FriendsFingers DAO Platform. Use Shaka tokens to join DAO.',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' }],
    ['meta', { name: 'google-site-verification', content: 'c0BYczxXdBqyQL7I53N_77M_GcsNQIK9IHvjoAeMbW4' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/cookie-bar/cookiebar-latest.min.js?forceLang=en&theme=momh&tracking=1&thirdparty=1&always=1&noGeoIp=1&scrolling=1&hideDetailsBtn=1&showPolicyLink=1&remember=30&privacyPage=https%3A%2F%2Fwww.friendsfingers.com%2Fprivacy' }], // eslint-disable-line max-len
  ],
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-111269229-5',
      },
    ],
  ],
};
