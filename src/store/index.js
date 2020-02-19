import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currencies: null,
    allCrypto: null,
    location: 'us-US'
  },
  mutations: {
    setCurrencies (state, currencies, location) {
      state.currencies = currencies
      state.allCrypto = currencies.data.coins

      // Change all coin prices and all time high prices to given currency and regional format  PROP

      state.currencies.data.coins.forEach(coin => {
        // Below is potentially unsupported on Opera & node.js
        // coin.price = new Intl.NumberFormat('us-US', { style: 'currency', currency: 'USD' }).format(coin.price)

        coin.price = (Number(coin.price)).toLocaleString(location, { style: 'currency', currency: 'USD' })
      })

      state.currencies.data.coins.forEach(coin => {
        coin.allTimeHigh.price = (Number(coin.allTimeHigh.price)).toLocaleString('location', { style: 'currency', currency: 'USD' })
      })

      // Change date to regional format  PROP

      state.currencies.data.coins.forEach(coin => {
        coin.firstSeen = (new Date(coin.firstSeen)).toLocaleDateString(location)
      })
    },

    changeDate (state, location) {
      state.allCrypto.forEach(coin => {
        coin.firstSeen = (new Date(coin.firstSeen)).toLocaleDateString(location)
      })
    },

    numberFormat (state, location) {
      state.location = location
    }

  },
  actions: {
  },
  modules: {
  }
})
