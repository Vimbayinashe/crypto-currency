<template>

  <div>
    <div v-if="coins != null">

      <div id = "single-currency">
        <div id="single-header">
          <img id="single-image" :src="coins[coinIndex].iconUrl" alt="">
          <h2>{{ coins[coinIndex].name }}</h2>
        </div>

        <div id="currency-description">{{ coins[coinIndex].description}}</div>

        <div id = "information">
          <!-- Format as flexbox with 2 rows -->
          <div class = "flex-heading">Rank:</div>
          <div>{{ coins[coinIndex].rank }}</div>
          <div class = "flex-heading">Price: </div>
          <div>{{ coins[coinIndex].price }}</div>
          <div class = "flex-heading">Percentage Change:</div>
          <div>{{ coins[coinIndex].change }} %</div>
          <div class = "flex-heading">All Time High:</div>
          <div>{{ coins[coinIndex].allTimeHigh.price }}</div>
          <div class = "flex-heading">First Seen:</div>
          <div>{{ coins[coinIndex].firstSeen}}</div>
          <!-- <div class = "flex-heading">Historical Price (7 days): </div> -->

          <!-- Below is working with formula inline -->
          <!-- <div :key="price.id" v-for="price in priceHistory">
            <div>
              {{ (parseFloat(price)).toLocaleString('us-US', { style: 'currency', currency: 'USD' }) }}
            </div> -->

            <!-- whilst price gives unformatted numbers -->
            <!-- <div>{{ price}} </div> -->
          <!-- </div> -->

        </div>
      </div>
    </div>
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
        this.formatNumbers()
        this.getSevenDayHistory()
      })
  },
  data () {
    return {
      allResult: null,
      coinIndex: null,
      coins: null,
      priceHistory: null
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
    },
    formatNumbers () {
      // formatting all time high price
      this.coins[this.coinIndex].price = (parseFloat(this.coins[this.coinIndex].price)).toLocaleString('us-US', { style: 'currency', currency: 'USD' })

      this.coins[this.coinIndex].allTimeHigh.price = (parseFloat(this.coins[this.coinIndex].allTimeHigh.price)).toLocaleString('us-US', { style: 'currency', currency: 'USD' })

      // formatting date
      this.coins[this.coinIndex].firstSeen = (new Date(this.coins[this.coinIndex].firstSeen)).toLocaleDateString('sv-SV')
    },
    getSevenDayHistory () {
      if (this.coins[this.coinIndex].history.length > 7) {
        this.priceHistory = this.coins[this.coinIndex].history.splice(0, 7)
      } else {
        this.priceHistory = this.coins[this.coinIndex].history
      }
      this.priceHistory.forEach(price => {
        price = (parseFloat(price)).toLocaleString('us-US', { style: 'currency', currency: 'USD' })
      })
    }
  },
  updated () {
    this.setTitle()
  },
  name: 'OneCurrency'
}

</script>

<style>

#single-currency {
  height: 60vh;
  margin: 4em 6em;
}

#single-currency img {
  height : 6em;
  /* margin: 2em ; */
  width : auto
}

#single-header {
  display:flex;
  flex-direction: row;
  margin: 3em;
}

#single-header h2{
  font-size: 200%;
  padding-top: 1.1em
}

#currency-description {
  font-size: 130%;
  font-style: italic;
  line-height: 170%;
  margin: 2em 0
}

#information {
  display: flex;
  flex-wrap: wrap;
  width: 50vw;
}

#information > div {
  font-weight: 1.2;
  margin: 0.2em;
  width: 40%;
}

.flex-heading {
  /* color: rgba(0, 0, 0, 0.747); */
  font-size: 110%;
  width: 20%;
}
</style>
