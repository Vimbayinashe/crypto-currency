<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <p>{{ currencies.data.coins[0].name }}</p>
      <TopCurrencies heading = "Highest Rated CryptoCurrencies"></TopCurrencies>
      <History></History>
    </div>
    <router-view/>
  </div>
</template>

<script>

import History from '@/components/History.vue'
import store from './store'
import TopCurrencies from '@/components/TopCurrencies.vue'

export default {
  components: {
    History,
    TopCurrencies
  },
  created () {
    fetch('https://api.coinranking.com/v1/public/coins')
      .then(response => response.json())
      .then(result => {
        // this.currencies = result
        store.commit('setCurrencies', result)
        console.log(this.currencies)
        console.log(this.currencies.data.coins)
      })
  },
  computed: {
    currencies () {
      return this.$store.state.currencies
    }
  },
  name: 'App'

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
