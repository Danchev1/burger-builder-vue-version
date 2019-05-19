/* eslint no-param-reassign: "error" */
/* eslint no-shadow: ["error", { "allow": ["state"] }] */

import Http from '@/api/Http';

const state = {
  burgers: [],
};

const getters = {};

const mutations = {
  setBurgers: (state, payload) => {
    state.burgers = payload;
  },
};

const actions = {
  getBurgers({ commit }) {
    return Http.get('/burgers').then((response) => {
      commit('setBurgers', response.data);
    });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
