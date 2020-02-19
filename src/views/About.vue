<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>

export default {
  beforeMount () {
    this.setTitle()
  },
  methods: {
    setTitle () {
      document.title = this.$route.name
    }
  },
  updated () {
    this.setTitle()
  }
}
</script>
