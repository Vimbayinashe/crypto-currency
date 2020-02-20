<template>

  <div>
    <h2> {{ this.$route.params.coin }} </h2>
    <div v-if="coins != null">
      <p>Current Index: {{ coinIndex }}</p>
      <p>Current Name: {{coins[coinIndex].name}}</p>
    </div>

    <!-- Hypothetical Output -->
    <!-- <ol>
      <li :key="currency.id" v-for="currency in allCrypto">
        <span class = "individual">
          <a alt="" href=""><img :src="currency.iconUrl" alt="">{{ currency.name }}</a>
          <p>{{ currency.price }}</p>
          <p>{{ currency.allTimeHigh.price }}</p>
          <p>{{ currency.firstSeen }}</p>
          <p>{{ (currency.change).toFixed(2) }}%</p>
        </span>
      </li>
    </ol> -->

  </div>

</template>

<script>

// trying another way

export default {
  created () {
    fetch('https://api.coinranking.com/v1/public/coins')
      .then(response => response.json())
      .then(result => {
        this.allResult = result
        this.coins = this.allResult.data.coins
        this.getIndex()
      })
  },
  data () {
    return {
      allResult: null,
      coinIndex: null,
      coins: null
    }
  },
  beforeMount () {
    this.setTitle()
  },
  methods: {
    setTitle () {
      document.title = 'CryptoBourse: ' + this.$route.params.coin
    },
    getIndex () {
      this.coinIndex = this.coins.findIndex(coin => coin.name === this.$route.params.coin)
    }
  },
  updated () {
    this.setTitle()
    // this.getIndex()
  },
  name: 'OneCurrency'
}

</script>
