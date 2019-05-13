/* global __DEFAULT_NETWORK__ */

export default {
  state: {
    address: '',
    legacy: false,
    web3: null,
    web3Provider: null,
    metamask: {
      address: '',
      installed: false,
      netId: null,
    },
    network: {
      default: __DEFAULT_NETWORK__,
      current: null,
      map: {
        1: 'mainnet',
        3: 'ropsten',
        4: 'rinkeby',
        42: 'kovan',
      },
      list: {
        mainnet: {
          web3Provider: 'https://mainnet.infura.io/v3/fab631a7b8364aaaa7a8268d09c0f118',
          etherscanLink: 'https://etherscan.io',
          id: '1',
          name: 'Main Ethereum Network',
          color: 'success',
        },
        ropsten: {
          web3Provider: 'https://ropsten.infura.io/v3/fab631a7b8364aaaa7a8268d09c0f118',
          etherscanLink: 'https://ropsten.etherscan.io',
          id: '3',
          name: 'Ropsten Test Network',
          color: 'danger',
        },
        rinkeby: {
          web3Provider: 'https://rinkeby.infura.io/v3/fab631a7b8364aaaa7a8268d09c0f118',
          etherscanLink: 'https://rinkeby.etherscan.io',
          id: '4',
          name: 'Rinkeby Test Network',
          color: 'warning',
        },
        kovan: {
          web3Provider: 'https://kovan.infura.io/v3/fab631a7b8364aaaa7a8268d09c0f118',
          etherscanLink: 'https://kovan.etherscan.io',
          id: '42',
          name: 'Kovan Test Network',
          color: 'primary',
        },
      },
    },
  },
  getters: {
    address (state) {
      return state.address;
    },
    network (state) {
      return state.network;
    },
    metamask (state) {
      return state.metamask;
    },
    web3 (state) {
      return state.web3;
    },
  },
  mutations: {
    setAddress (state, address) {
      localStorage.setItem('address', address);
      state.address = address;
    },
  },
  actions: {
    async init ({ state, commit }) {
      state.currentNetwork = state.network.default;
      state.network.current = state.network.list[state.currentNetwork];

      try {
        this.dispatch('initWeb3', true);
      } catch (e) {
        alert(e);
      }
    },
    load ({ commit }) {
      commit('setAddress', localStorage.getItem('address') || null);
    },
    initWeb3 ({ state, commit }, checkWeb3) {
      if (!state.network.list.hasOwnProperty(state.currentNetwork)) {
        throw new Error(
          `Failed initializing network ${state.currentNetwork}. Allowed values are mainnet, ropsten and rinkeby.`,
        );
      }

      return new Promise((resolve) => {
        if (checkWeb3 && (typeof window.ethereum !== 'undefined' || typeof window.web3 !== 'undefined')) {
          if (window.ethereum) {
            console.log('injected web3'); // eslint-disable-line no-console
            state.web3Provider = window.ethereum;
          } else {
            console.log('injected web3 (legacy)'); // eslint-disable-line no-console
            state.web3Provider = window.web3.currentProvider;
            state.legacy = true;
          }

          state.web3 = new Web3(state.web3Provider);
          state.metamask.installed = true;
          state.web3.version.getNetwork(async (err, netId) => {
            if (err) {
              console.log(err); // eslint-disable-line no-console
            }

            state.metamask.netId = netId;

            if (netId !== state.network.list[state.currentNetwork].id) {
              state.network.current = state.network.list[state.network.map[netId]];
              await this.dispatch('initWeb3', false);
            }

            state.metamask.address = state.web3.eth.accounts[0] || '';
            commit('setAddress', state.metamask.address);

            resolve();
          });
        } else {
          console.log('provided web3'); // eslint-disable-line no-console
          state.network.current = state.network.list[state.currentNetwork];
          state.web3Provider = new Web3.providers.HttpProvider(state.network.list[state.currentNetwork].web3Provider);
          state.web3 = new Web3(state.web3Provider);

          resolve();
        }
      });
    },
    async connect ({ state, commit }) {
      try {
        if (!state.legacy) {
          await state.web3Provider.enable();
        }

        state.metamask.address = state.web3.eth.accounts[0] || '';

        commit('setAddress', state.metamask.address);
      } catch (e) {
        console.log(e); // eslint-disable-line no-console
        alert('Cannot connect. Please verify that you have MetaMask installed and unlocked.');
      }
    },
    disconnect ({ commit }) {
      commit('setAddress', '');
      document.location.href = '/';
    },
  },
};
