import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import {firestorePlugin} from 'vuefire'
import axios from 'axios'
// import VueFire from 'vuefire'

Vue.prototype.$axios = axios

Vue.use(firestorePlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
