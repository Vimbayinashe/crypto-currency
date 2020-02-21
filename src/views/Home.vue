<template>
  <div class="home">
    <div>
    "A cryptocurrency is a digital or virtual currency that is secured by cryptography, which makes it nearly impossible to counterfeit or double-spend. Many cryptocurrencies are decentralized networks based on blockchain technology—a distributed ledger enforced by a disparate network of computers. A defining feature of cryptocurrencies is that they are generally not issued by any central authority, rendering them theoretically immune to government interference or manipulation.""
    </div> <div id="creditation">Source: www.investopedia.com</div>

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  components: {
    // HelloWorld
  },
  computed: {
    currencies () {
      return this.$store.state.currencies
    },
    allCoins () {
      return this.$store.state.allCoins
    }
  },
  name: 'Home',
  beforeMount () {
    this.setTitle()
  },
  methods: {
    setTitle () {
      document.title = 'CryptoCurrency Bourse'
    }
  },
  updated () {
    this.setTitle()
  }
}
</script>

<style>
  .home {
    line-height: 150%;
    margin: 10em;
  }

  #creditation {
    color: rgba(0, 0, 0, 0.8);
    font-style: italic;
    margin: 1em 2em;
  }
</style>
