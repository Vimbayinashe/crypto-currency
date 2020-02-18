<template>
  <div  id = "all-currencies">
    <h2>History</h2>
    <div>
      <label for="views">Select display:</label>
      <select id="views">
        <option value="10">10 per page</option>
        <option value="20">20 per page</option>
        <option value="all">View all</option>
      </select>
    </div>

    <ol>
      <li :key="currency.id" v-for="currency in currencies.data.coins">
        <span class = "individual">
          <a alt="" href=""><img :src="currency.iconUrl" alt="">{{ currency.name }}</a>
          <p>${{ currency.price }}</p>
          <p>${{ currency.allTimeHigh.price }}</p>
          <p>${{ currency.firstSeen }}</p>
          <p>${{ currency.change }}</p>
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
    }
  },
  name: 'AllCurrencies'
}

</script>
