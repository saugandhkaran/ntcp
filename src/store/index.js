import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    challanData: undefined
  },
  mutations: {
    updateChallanData(state, challanObject) {
      state.challanData = challanObject
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    defaulterChallanDetails: state => state.challanData
  }
})
