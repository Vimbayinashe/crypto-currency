<template>
  <div class="highest">
    <h2>Highest Moving Cryptocurrencies</h2>

    <table @country-selected="adjustDate">
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Percentage</th>
          <th>Increase</th>
          <th>Price</th>
          <th>Coin Ranking</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="coin.id" v-for="coin in highestChange">
          <td> {{ highestChange.indexOf(coin) + 1 }}.</td>
          <td>
            <router-link :to="'/currencies/' + coin.name">
              <img :src="coin.iconUrl" :alt="coin.name + 'logo'">
              {{ coin.name }}
            </router-link>
          </td>
          <td>{{ coin.change }}%</td>
          <td>${{ (parseFloat(coin.change*coin.price/100)).toFixed(2) }}</td>
          <td>${{ (parseFloat(coin.price)).toFixed(2) }}</td>
          <td>{{ coin.rank }}</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
export default {
  created () {
    fetch('https://api.coinranking.com/v1/public/coins')
      .then(response => response.json())
      .then(result => {
        this.allResult = result
        this.coins = this.allResult.data.coins
        this.sortCoins(this.coins)
        this.selectHighest(this.coins)
      }).then(this.sortCoins(this.coins))
  },
  data () {
    return {
      allResult: null,
      coins: [],
      highestChange: []
    }
  },
  methods: {
    sortCoins (coins) {
      coins.sort(function (a, b) {
        return b.change - a.change
      })
      // coins.forEach(coin => {
      //   coin.price = (Number(coin.price)).toLocaleString(this.format, { style: 'currency', currency: 'USD' })
      // })
    },
    selectHighest (coins) {
      this.highestChange = this.coins.splice(0, this.count)
    },
    adjustDate (payload) {
      console.log(payload)
      console.log('something is happening in HighestMover')
      // this.coins.forEach(coin => {
      //   coin.firstSeen = (new Date(coin.firstSeen)).toLocaleDateString(payload)
      // })
    }
  },
  name: 'HighestMovers',
  props: {
    count: {
      default: 5,
      type: Number
    }
    // format: {
    //   default: 'sv-SV',
    //   type: String
    // }
  }
}
</script>
