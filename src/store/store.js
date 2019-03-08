import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
import VueAxios from 'vue-axios'

import invoiceModule from './modules/invoice';

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
    store: invoiceModule,
  },
  modules:{
    module: invoiceModule,
  }
})
