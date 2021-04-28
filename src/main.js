import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import MainMenu from '@/components/MainMenu.vue'
import ErrorPopUp from '@/components/popups/ErrorPopUp.vue'
import vuetify from '@/plugins/vuetify'

Vue.config.productionTip = false

Vue.component('main-menu', MainMenu)
Vue.component('error-popup', ErrorPopUp)

Vue.use(router)
new Vue({
  router,
  store,
  vuetify,

  components: {
    MainMenu
  },
  render: h => h(App)
}).$mount('#app')
