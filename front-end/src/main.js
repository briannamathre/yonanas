import Vue from 'vue'
import App from './App.vue'
import router from './router'
import yonana from './yonanaData.js'

Vue.config.productionTip = false

let data = {
  yonanas: yonana,
  cart: []
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
