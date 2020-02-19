<template>
  <div id = "display-option">
        <label for="display-format">Date format:</label>
        <select
          id="display-format"
          v-model="location"
          @click="countrySelected()"
          >
          <option value="us-US">United States</option>
          <!-- <option value="gb-GB">English (UK)</option> -->
          <!-- <option value="de-DE">Germany</option> -->
          <option value="sv-SV">Sweden</option>
        </select>
        <div id = "small-flag">
          {{ location.slice(3) }}
          <div v-if="location == 'us-US'">
            <img src="../assets/flags/us.png" alt="">
          </div>
          <!-- <div v-else-if="location == 'gb-GB'">
            <img src="../assets/flags/gb.png" alt="">
          </div> -->
          <!-- <div v-else-if="location == 'de-DE'">
            <img src="../assets/flags/de.png" alt="">
          </div> -->
          <div v-else>
            <img src="../assets/flags/sv.png" alt="">
          </div>
        </div>

        <!-- <label for="display-currency">Select display:</label>
        <select id="display-currency">
          <option value="USD">USD</option>
          <option value="20">20 per page</option>
          <option value="all">View all</option>
        </select> -->

      </div>
</template>

<script>

export default {

  computed: {
    currencies () {
      return this.$store.state.currencies
    },
    location: {
      get () {
        return this.$store.state.location
      },
      set (location) {
        this.$store.commit('numberFormat', location)
        // this.$store.commit('changeCurrenciesFormat', location)
      }
    }
  },
  methods: {
    countrySelected () {
      this.$emit('country-selected', location)
    }
  },
  name: 'CountryChoice'

}
</script>
