<template>

  <div>
    <h2> {{ $route.params.coin }} </h2>
    <div>
      Information
      <!-- {{
        allCrypto.
      }} -->
      <p>{{ currencies.data.coins[0] }}</p>
      result
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

export default {
  computed: {
    currencies () {
      return this.$store.state.currencies
    },
    allCrypto () {
      return this.$store.state.allCrypto
    }
  },
  data () {
    return {
      // result: this.$store.state.allCrypto.find(coin => coin.name === this.$route.params.coin)
      // link: this.$route.params.coin // v-model is the one which updates automatically
    }
  },
  beforeMount () {
    this.setTitle()
  },
  methods: {
    setTitle () {
      document.title = 'CryptoBourse: ' + this.$route.params.coin
      // document.title = 'About ' + this.$route.params.userName
    }
  },
  updated () {
    this.setTitle()
  },
  name: 'OneCurrency'
}

</script>
