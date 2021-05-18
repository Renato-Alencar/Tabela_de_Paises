import Vue from 'vue'
import Vuex from 'vuex'
import { getData } from '@/api/config'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    countries: []
  },
  mutations: {
    SET_DATA(state, payload) {
      state.countries = payload
    },
    REVERSE_TABLE(state) {
      state.countries = state.countries.reverse()
    }
  },
  actions: {
    async listData({commit}) {
      const response = await getData()
      commit('SET_DATA', response.data)
    }
  },
})