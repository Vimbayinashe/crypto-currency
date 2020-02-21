<template>
  <div id="app">

    <div id="nav">
      <router-link to="/">
        <div id="main-heading">CryptoCurrency Bourse</div>
      </router-link>
      <router-link to="/currencies">
        <div id="currency-heading">|    Currencies </div>
      </router-link>
    </div>

    <div id="country-choice" v-if="!$route.params.coin">
      <CountryChoice @country-selected="$store.commit('changeDate', (location))"></CountryChoice>
    </div>

    <div id="home-contents" v-if="$route.name == 'Home' && currencies != null">
      <!-- This prop lets me change number of top currencies displayed on Home Screen  -->
      <TopCurrencies :count="5"></TopCurrencies>
      <HighestMovers></HighestMovers>
    </div>

    <div id = "currencies-button" v-if="!$route.params.coin && $route.name !='AllCurrencies'">
      <router-link id="currencies-link" to="/currencies">See All CryptoCurrencies</router-link>
    </div>

    <router-view/>

    <footer>
      Data provided by <a href="">Coinranking</a>
    </footer>

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
        store.commit('setCurrencies', result)
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
      }
    }
  },
  data () {
    return {
      topFive: [],
      coins: null
    }
  },
  name: 'App'

}
</script>

<style>

* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

#main-heading {
  color: black;
  font-size: 2.6em;
  font-weight: bold;
  line-height: 3.6em;
  margin: 0 2em;
}

#currency-heading {
color: #000000;
font-weight: 600;
font-size: 2em;
line-height: 4.6em;
margin: 0 1.5em;
}

#nav {
  display: flex;
  justify-content: space-evenly;
  background: #4AEA80;
  width: 100vw;
}

#country-choice {
  float: right;
  margin: 1em;
}

#home-contents {
  clear: both;
  margin: 5em;
}

#home-contents {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

h2 {
  padding: 1em 2em;
}

.top, .highest {
  box-shadow: 3px 4px 8px rgba(0, 0, 0, 0.25), -3px 0px 8px rgba(0, 0, 0, 0.25);
  margin: 2em;
  padding: 0 1.5em;
}

/* link style */

a {
  text-decoration: none
}

a:visited {
  color: blue;
}

/* Table Style */
th, tr{
  margin: 2em;
  padding: 1em;
}

tr, td {
  margin: 2em;
  padding: 1em;
}

td img {
  height : 50px;
  width : auto
}

/* All Currency Styles */

#currencies-button {
  text-align: center;
  background: rgba(74, 234, 128, 0.76);
  border-radius: 15px;
  font-size: 150%;
  height: 3em;
  margin: 2em 40vw;
  width: 15em;
}

#currencies-link {
  position: relative;
  top: 1em;
}

#all-currencies {
  box-shadow: 3px 4px 8px rgba(0, 0, 0, 0.25), -3px 0px 8px rgba(0, 0, 0, 0.25);
  margin: 4em 6em;
  padding: 2em;
  width: 75vw
}

/* Footer Style */

footer {
  background: #4AEA80;
  height: 7vh;
  font-size: 1.5em;
  padding-top: 0.8em;
  text-align: center;
  width: 100vw;
}

</style>
