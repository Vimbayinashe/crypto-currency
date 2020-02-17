<template>
  <div class="home">
    <!-- <HelloWorld deactivated -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- The below has been proven to be working -->
    <!-- <p>{{ currencies.data.coins[0] }}</p> -->
    <div>
      <h3>All Coins at highest price (Home.vue)</h3>
      <ol>
        <li :key="value.id" v-for="(value) in currencies.data.coins">{{ value.name }} is {{ value.allTimeHigh.price }}</li>
        <!-- <li v-for="element.name in currencies.data.coins">{{ element }}</li> -->
      </ol>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  components: {
    // HelloWorld
  },
  computed: {
    currencies () {
      return this.$store.state.currencies
    }
  },
  name: 'Home'
}
</script>
