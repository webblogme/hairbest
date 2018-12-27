// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResources from 'vue-resource'
import './../node_modules/bulma/css/bulma.css'
import './assets/main.less'

Vue.use(VueResources)
Vue.http.options.root = 'http://localhost:97/api/'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
