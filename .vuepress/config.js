module.exports = {
  title: 'FriendsFingers',
  description: 'FriendsFingers official web site',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'google-site-verification', content: 'c0BYczxXdBqyQL7I53N_77M_GcsNQIK9IHvjoAeMbW4' }],
    ['script', { src: '/assets/js/web3.min.js' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/cookie-bar/cookiebar-latest.min.js?forceLang=en&theme=momh&tracking=1&thirdparty=1&always=1&noGeoIp=1&scrolling=1&hideDetailsBtn=1&showPolicyLink=1&remember=30&privacyPage=https%3A%2F%2Fwww.friendsfingers.com%2Fprivacy' }], // eslint-disable-line max-len
  ],
  plugins: [
    ['@vuepress/google-analytics', {
      ga: 'UA-111269229-5',
    }],
  ],
  chainWebpack: (config) => {
    // const isProd = process.env.NODE_ENV && process.env.NODE_ENV === 'production';

    // TODO remove this
    const isProd = false;

    config.plugin('injections').tap(pluginArgs => pluginArgs.map(definitions => ({
      ...definitions,
      '__TOKEN_ADDRESS__': JSON.stringify(isProd ? '0x93a7174dafd31d13400cd9fa01f4e5b5baa00d39' : '0xe58cade1d92e5f5ce8b1bb4489c2196f832d5807'), // eslint-disable-line max-len
      '__FAUCET_ADDESS__': JSON.stringify(isProd ? '0x87d9EF8951DE64b7246fdb7c7D5a52760677f361' : '0x7B8d7dae72D9AF3A0E17Aa188b84EF33ff109316'), // eslint-disable-line max-len
      '__DAO_ADDESS__': JSON.stringify(isProd ? '' : '0x34C90f38B69Cd13C34d8B9b62AEb184B55E65E9c'), // eslint-disable-line max-len
      '__DEFAULT_NETWORK__': JSON.stringify(isProd ? 'mainnet' : 'rinkeby'),
      '__DEFAULT_NETWORK_NAME__': JSON.stringify(isProd ? 'Main Ethereum Network' : 'Rinkeby Test Network'),
    })));
  },
};
