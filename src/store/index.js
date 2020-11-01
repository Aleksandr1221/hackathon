import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    team: null
  },
  mutations: {
    SET_TEAM: (state, id) => {
      state.team = id
    }
  },
  actions: {
    GET_USER_TEAM({commit}, team){
      commit('SET_TEAM', team)
    }
  },
  getters: {
    GET_TEAM(state) {
      return state.team
    }
  },
  modules: {
  }
})
