/* global __TOKEN_ADDRESS__, __FAUCET_ADDESS__, __DAO_ADDESS__ */

import TokenArtifact from '../abi/BaseToken';
import FaucetArtifact from '../abi/TokenFaucet';
import DAOArtifact from '../abi/DAO';

export default {
  data () {
    return {
      zeroAddress: '0x0000000000000000000000000000000000000000',
      contracts: {
        token: null,
        faucet: null,
        dao: null,
      },
      instances: {
        token: null,
        faucet: null,
        dao: null,
      },
    };
  },
  computed: {
    web3: {
      get () {
        return this.$store.getters['web3'];
      },
    },
  },
  methods: {
    initToken () {
      this.contracts.token = this.web3.eth.contract(TokenArtifact.abi);
      this.instances.token = this.contracts.token.at(__TOKEN_ADDRESS__);
    },
    initDao () {
      this.contracts.dao = this.web3.eth.contract(DAOArtifact.abi);
      this.instances.dao = this.contracts.dao.at(__DAO_ADDESS__);
    },
    initFaucet () {
      this.contracts.faucet = this.web3.eth.contract(FaucetArtifact.abi);
      this.instances.faucet = this.contracts.faucet.at(__FAUCET_ADDESS__);
    },
    ready () {},
    formatStructure (struct) {
      const memberId = parseInt(struct[0].valueOf());

      if (memberId === 0) {
        return null;
      }

      return {
        id: parseInt(struct[0].valueOf()),
        address: struct[1],
        fingerprint: this.formatFingerprint(struct[2]),
        creationDate: struct[3].valueOf() * 1000,
        stakedTokens: this.web3.fromWei(struct[4]),
        data: struct[5],
        verified: struct[6],
      };
    },
    formatFingerprint (fingerprint) {
      const chunk = fingerprint.replace('0x', '').match(new RegExp('.{1,6}', 'g'));

      return {
        borderColor: `#${chunk[0]}`,
        backgroundColor: `#${chunk[1]}`,
        mainColor: `#${chunk[2]}`,
      };
    },
  },
};
