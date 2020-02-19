<template>

  <div>
    <h2> {{ this.$route.params.coin }} </h2>
    <div>
      <p>Current Index: {{ coinIndex }}</p>
      <p>Current Name: {{allCrypto[coinIndex].name}}</p>
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
      coinIndex: null
    }
  },
  beforeMount () {
    this.setTitle()
  },
  methods: {
    setTitle () {
      document.title = 'CryptoBourse: ' + this.$route.params.coin
      // document.title = 'About ' + this.$route.params.userName
    },
    getIndex () {
      this.coinIndex = this.$store.state.allCrypto.findIndex(coin => coin.name === this.$route.params.coin)
      console.log(this.allCrypto[this.coinIndex])
    }
  },
  updated () {
    this.setTitle()
    this.getIndex()
  },
  name: 'OneCurrency'
}

</script>
