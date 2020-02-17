<template>
  <div class="top">
    <!-- <h2>{{ msg }}</h2> NOT WORKING -->
    <h2>Top 5</h2>
    <ol>
      <li :key="coin.id" v-for="coin in topFive">
        <div class = "individual">
          <a alt="" href=""><img :src="coin.iconUrl" alt="">{{ coin.name }}</a>
          <p>${{ coin.price }}</p>
        </div>
      </li>
      <!-- <li :key="coin.id" v-for="coin in topFive">{{ coin.name }} costs ${{ coin.price }}</li> -->
    </ol>
    <!-- Nothing shown in this list => topFive is empty -->
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  computed: {
    currencies () {
      return this.$store.state.currencies
    }
  },
  created () {
    // fetch
    fetch('https://api.coinranking.com/v1/public/coins')
      .then(response => response.json())
      .then(result => {
        this.coins = result
        this.topFive = this.coins.data.coins.splice(0, 5)
        console.log(this.topFive)
      })
  },
  data () {
    return {
      topFive: [],
      coins: null
    }
  },
  // Method NOT used
  methods: {
    getTopFive () {
      let i = 0
      if (i < 5) {
        const coin = this.$store.currencies.data.coins[i]
        this.topFive.push(coin)
        i++
      }
    }
  },
  name: 'TopCurrencies',
  // props: {
  //   cryptoCurrency: {
  //     type: Object
  //   }
  // }
  props: {
    heading: String
  }
}
</script>

<style>
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
