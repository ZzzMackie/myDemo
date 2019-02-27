import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

const state = {
  position: {name: '北京'},
  user: null
}

const mutations = {
  setPosition (state, value) {
    state.position = value
  },
  setUser (state, value) {
    state.user = value
  }
}
const actions = {
  setPosition ({commit}, value) {
    commit('setPosition', value)
  },
  setUser ({commit}, value) {
    commit('setUser', value)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
