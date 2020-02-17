import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currencies: null
  },
  mutations: {
    setCurrencies (state, currencies) {
      state.currencies = currencies
    }
  },
  actions: {
    // getCryptoCurrencies () {
    //   fetch('https://api.coinranking.com/v1/public/coins')
    //     .then(response => response.json())
    //     .then(result => {
    //       this.commit('setCurrencies', result)
    //       // this.currencies = result
    //       console.log(this.currencies)
    //       console.log(this.currencies.data.coins)
    //     })
    // }
  },
  modules: {
  }
})
