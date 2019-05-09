import Vuex from 'vuex';

import BootstrapVue from 'bootstrap-vue';
import VeeValidate from 'vee-validate';
import { VueSpinners } from '@saeris/vue-spinners';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import {
  faTelegramPlane,
  faMediumM,
  faTwitter,
  faFacebookF,
  faLinkedinIn,
  faEthereum,
  faGithub,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

import dappStore from './store/dapp.store';

library.add(faInfoCircle);
library.add(faTelegramPlane);
library.add(faMediumM);
library.add(faTwitter);
library.add(faFacebookF);
library.add(faLinkedinIn);
library.add(faEthereum);
library.add(faGithub);
library.add(faWhatsapp);

export default ({ Vue }) => {
  Vue.use(Vuex);

  Vue.use(BootstrapVue);
  Vue.use(VeeValidate);
  Vue.use(VueSpinners);

  Vue.component('font-awesome-icon', FontAwesomeIcon);

  const store = new Vuex.Store(dappStore);

  Vue.mixin({ store: store });

  store.dispatch('init');

  Vue.filter('formatLocaleDate', function (value) {
    if (!value) {
      return '';
    }

    return new Date(value).toLocaleString();
  });
};
