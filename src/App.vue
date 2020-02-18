<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <!-- name: {{ $route.name }}  unique identifier for this route-->
      <div id = "display-option">
        <label for="display-format">Location format:</label>
        <select id="display-format" v-model="location">
          <option value="us-US">English (US)</option>
          <option value="gb-GB">English (UK)</option>
          <option value="de-DE">Germany</option>
          <option value="sv-SV">Sweden</option>
        </select>
        <p>Location: {{ location.slice(3) }}</p>

        <!-- <label for="display-currency">Select display:</label>
        <select id="display-currency">
          <option value="USD">USD</option>
          <option value="20">20 per page</option>
          <option value="all">View all</option>
        </select> -->
      </div>
      <div v-if="$route.name == 'Home' && currencies != null">
        <p>{{ currencies.data.coins[0].name }}</p>
        <TopCurrencies :count="3"></TopCurrencies>

        <!-- This prop lets me change number of top currencies displayed on Home Screen  -->
      </div>
    </div>
    <router-link to="/currencies">See All CryptoCurrencies</router-link>
    <router-view/>
  </div>
</template>

<script>

import store from './store'
import TopCurrencies from '@/components/TopCurrencies.vue'

export default {
  components: {
    // History,
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
  data () {
    return {
      topFive: [],
      coins: null,
      location: 'us-US'
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

</style>
