<template @country-selected="$store.commit.setCurrencies">
  <div  id = "all-currencies">
    <h2>All Currencies</h2>
    <div>
      <label for="views">Select display:</label>
      <select id="views">
        <option value="10">10 per page</option>
        <option value="20">20 per page</option>
        <option value="all">View all</option>
      </select>
    </div>

    <ol>
      <li :key="currency.id" v-for="currency in allCrypto">
        <span class = "individual">
          <a alt="" href=""><img :src="currency.iconUrl" alt="">{{ currency.name }}</a>
          <p>{{ currency.price }}</p>
          <p>{{ currency.allTimeHigh.price }}</p>
          <p>{{ currency.firstSeen }}</p>
          <!-- <p>{{ typeof(currency.firstSeen) }}</p> -->
          <p>{{ (currency.change).toFixed(2) }}%</p>
        </span>
      </li>
    </ol>
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
  name: 'AllCurrencies'
}

</script>
