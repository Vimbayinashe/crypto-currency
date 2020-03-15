<template>
  <div id = "display-option">
        <label for="display-format">
          <div id = "small-flag">
            Select Region:
          </div>
        </label>
        <select
          id="display-format"
        >
          <!-- v-model="location" was in select element-->
          <option value="us-US"  @click="countrySelected('US')">
            United States
          </option>
          <!-- Future Development Formats -->
          <option value="gb-GB" @click="countrySelected('GB')">
            English (UK)
          </option>
          <option value="de-DE" @click="countrySelected('DE')">
            Germany
          </option>
          <option value="sv-SV" @click="countrySelected('SV')">Sweden</option>
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
    countrySelected (code) {
      this.$emit('country-selected', code)
      console.log('Payload emitted: ' + code)
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
