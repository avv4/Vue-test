import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//base style
import '@/assets/scss/base.scss';

//js files
import { cookie } from '@/assets/js/cookie.js';

Vue.config.productionTip = false
Vue.prototype.$cookie = cookie;

const vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

export { vm }