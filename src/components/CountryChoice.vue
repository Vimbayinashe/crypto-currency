<template>
  <div id = "display-option">
        <label for="display-format">
          <div id = "small-flag">
            <div>{{ location.slice(3) }}</div>
            <div v-if="location == 'us-US'">
              <img src="../assets/flags/us.png" alt="">
            </div>
            <div v-else>
              <img src="../assets/flags/sv.png" alt="">
            </div>
          </div>
        </label>
        <select
          id="display-format"
          v-model="location"
          @click="countrySelected()"
        >
          <option value="us-US">United States</option>
          <!-- Future Development Formats -->
          <!-- <option value="gb-GB">English (UK)</option> -->
          <!-- <option value="de-DE">Germany</option> -->
          <option value="sv-SV">Sweden</option>
        </select>

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

<style scoped>

#display-option {
  display:flex;
  flex-direction: row;
}
#small-flag {
  display:flex;
  flex-direction: row;
}
#small-flag > div {
   margin: 0.2em;
}
label {
  margin-right: 0.25em;
}

</style>
