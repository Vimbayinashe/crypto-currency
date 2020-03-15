<template @country-selected="changeRegion(payload)">
  <div  id = "all-currencies">
    <h2>All Currencies</h2>

    <table>
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Price</th>
          <th>All Time High</th>
          <th>First Seen</th>
          <th>Percentage Change</th>
        </tr>
      </thead>

      <tbody>
      <tr :key="currency.id" v-for="currency in allCrypto">
        <td> {{ allCrypto.indexOf(currency) + 1 }}.</td>
        <td>
          <router-link
            :to="'/currencies/' + currency.name"
          >
            <img :src="currency.iconUrl" :alt="currency.name + 'logo'">
            {{ currency.name }}
          </router-link>
        </td>
        <td>{{ currency.price }}</td>
        <td>{{ currency.allTimeHigh.price }}</td>
        <td>{{ currency.firstSeen }}</td>
        <td>
          {{ (currency.change).toFixed(2) }}%
        </td>
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
    },
    allCrypto () {
      return this.$store.state.allCrypto
    }
  },
  name: 'AllCurrencies',
  beforeMount () {
    this.setTitle()
  },
  methods: {
    setTitle () {
      document.title = 'CryptoBourse Currencies'
    },
    changeRegion (payload) {
      console.log(payload)
    }
  },
  updated () {
    this.setTitle()
  }
}

</script>
