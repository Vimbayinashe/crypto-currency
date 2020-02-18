<template>
  <div class="home">
    <!-- <p>{{ currencies.data.coins[0] }}</p> -->
    <div>
      <h3>All Coins at highest price (Home.vue)</h3>
      <ol>
        <li :key="value.id" v-for="(value) in currencies.data.coins">{{ value.name }} is {{ value.allTimeHigh.price }}</li>
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
