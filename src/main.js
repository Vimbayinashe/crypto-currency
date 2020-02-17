import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  // created () {
  //   fetch('https://api.coinranking.com/v1/public/coins')
  //     .then(response => response.json())
  //     .then(result => {
  //       this.currencies = result
  //       console.log(this.currencies)
  //       console.log(this.currencies.data.coins)
  //     })
  // },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
