<template>
  <div id="app">

    <div id="nav">
      <router-link to="/">CryptoCurrency Bourse</router-link> |
      <router-link to="/about">About</router-link>
      <!-- name: {{ $route.name }}  unique identifier for this route-->
    </div>

    <div v-if="!$route.params.coin">
      <CountryChoice @country-selected="$store.commit('changeDate', (location))"></CountryChoice>
    </div>

    <div v-if="$route.name == 'Home' && currencies != null">
      <!-- This prop lets me change number of top currencies displayed on Home Screen  -->
      <TopCurrencies :count="5"></TopCurrencies>
      <HighestMovers></HighestMovers>
    </div>

    <div id = "all-currencies" v-if="!$route.params.coin">
      <router-link to="/currencies">See All CryptoCurrencies</router-link>
    </div>

    <router-view/>

  </div>
</template>

<script>

import store from './store'
import CountryChoice from '@/components/CountryChoice.vue'
import HighestMovers from '@/components/HighestMovers.vue'
import TopCurrencies from '@/components/TopCurrencies.vue'

export default {
  components: {
    // History,
    CountryChoice,
    HighestMovers,
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
    },
    location: {
      get () {
        return this.$store.state.location
      },
      set (location) {
        this.$store.commit('numberFormat', location)
        // this.$store.commit('changeCurrenciesFormat', location)
      }
    }
  },
  data () {
    return {
      topFive: [],
      coins: null
      // location: 'us-US'
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

/* Styling Currency rows */

.individual {
  align-content: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  margin: 2em 1em
}

.individual>a {
  text-decoration: none
}

.individual img {
  height : 50px;
  width : auto
}

* {
  margin: 1em
}

li {
  height: 6em;
  text-align: center;
  padding: 0.5em 0
}

#display-option {
  display: inline;
}

#all-currencies {
  margin: 5em 1em;
}

</style>
