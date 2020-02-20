<template>
  <div class="top">
    <h2>Top {{ count }} Cryptocurrencies</h2>
    <!-- This has been transferred to a <table>s -->
    <!-- <ol>
      <li :key="coin.id" v-for="coin in topFive">
        <div class = "individual">
          <a alt="" href=""><img :src="coin.iconUrl" alt="">{{ coin.name }}</a>
          <p>{{ coin.price }}</p>
          {{ parseFloat(coin.price).toFixed(2) }} This works but is better to change this in created()
          <div>
          </div>
        </div>
      </li>
    </ol> -->

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
    // fetch
    fetch('https://api.coinranking.com/v1/public/coins')
      .then(response => response.json())
      .then(result => {
        this.coins = result
        this.topFive = this.coins.data.coins.splice(0, this.count)
        console.log(this.topFive)
        this.topFive.forEach(coin => {
          // coin.price = parseFloat(coin.price).toFixed(2)
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
