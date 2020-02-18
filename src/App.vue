<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <!-- name: {{ $route.name }}  unique identifier for this route-->
      <div v-if="$route.name == 'Home'">
        <p>{{ currencies.data.coins[0].name }}</p>
        <TopCurrencies></TopCurrencies>
      </div>
    </div>
    <router-link to="/currencies">See All CryptoCurrencies</router-link>
    <router-view/>
  </div>
</template>

<script>

// import History from '@/components/History.vue'
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

</style>
