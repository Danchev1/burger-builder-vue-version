import Vue from 'vue';
import Vuex from 'vuex';
import burgers from './modules/burgers';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    burgers,
  },
});
