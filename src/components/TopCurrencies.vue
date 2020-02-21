<template>
  <div class="top">
    <h2>Top {{ count }} Cryptocurrencies</h2>

    <table>
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
      <tr :key="coin.id" v-for="coin in topFive">
        <td> {{ topFive.indexOf(coin) + 1 }}.</td>
        <td>
          <router-link
            :to="'/currencies/' + coin.name"
          >
            <img :src="coin.iconUrl" :alt="coin.name + 'logo'">
            {{ coin.name }}
          </router-link>
        </td>
        <td>{{ coin.price }}</td>
      </tr>
      </tbody>
    </table>

  </div>
</template>

<script>

export default {
  computed: {
    currencies () {
      return this.$store.state.currencies
    }
  },
  created () {
    fetch('https://api.coinranking.com/v1/public/coins')
      .then(response => response.json())
      .then(result => {
        this.coins = result
        this.topFive = this.coins.data.coins.splice(0, this.count)
        this.topFive.forEach(coin => {
          coin.price = (Number(coin.price)).toLocaleString('us-US', { style: 'currency', currency: 'USD' })
        })
      })
  },
  data () {
    return {
      topFive: [],
      coins: null
    }
  },
  name: 'TopCurrencies',
  props: {
    count: {
      type: Number
    }
  }
}
</script>
