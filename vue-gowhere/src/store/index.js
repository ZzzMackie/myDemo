/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    val: 1
  },
  mutations: {
    increment (state) {
      state.val++
    }
  }
})
