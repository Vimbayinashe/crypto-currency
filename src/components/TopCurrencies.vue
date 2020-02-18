<template>
  <div class="top">
    <h2>Top 5</h2>
    <ol>
      <li :key="coin.id" v-for="coin in topFive">
        <div class = "individual">
          <a alt="" href=""><img :src="coin.iconUrl" alt="">{{ coin.name }}</a>
          <p>${{ coin.price }}</p>
          <!-- {{ parseFloat(coin.price).toFixed(2) }} This works but is better to change this in created() -->
        </div>
      </li>
    </ol>

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
        this.topFive.forEach(coin => {
          coin.price = parseFloat(coin.price).toFixed(2)
        })
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
        const oneCoin = this.$store.currencies.data.coins[i]
        console.log(oneCoin)
        // const finalCoin = parseFloat(oneCoin.price).toFixed(2)
        this.topFive.push(oneCoin)
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
