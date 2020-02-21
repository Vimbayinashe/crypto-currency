<template>
  <div class="highest">
    <h2>Highest Moving Cryptocurrencies</h2>

    <table>
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
          <router-link
          :to="'/currencies/' + coin.name"
          >
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

<!-- Should parseFloat() / toFixed() be ideally rendered in a function? -->

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
        console.log(this.coins)
        this.sortCoins(this.coins)
        this.selectHighest(this.coins)
        console.log(this.highestChange)
      }).then(this.sortCoins(this.coins)
      )
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
    },
    selectHighest (coins) {
      this.highestChange = this.coins.splice(0, this.count)
    }
    // formatCoins () {
    //   Try and make changes to highestChange here
    // }
  },
  name: 'HighestMovers',
  props: {
    count: {
      default: 5,
      type: Number
    }
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

a {
  text-decoration: none
}

td img {
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
