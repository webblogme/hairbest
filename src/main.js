// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResources from 'vue-resource'

import VueCarousel from '@chenfengyuan/vue-carousel'

import TopSection from './components/TopSection'
import Navigation from './components/Navigation'
import FooterContact from './components/FooterContact'
Vue.component(VueCarousel.name, VueCarousel)

Vue.use(VueResources)
Vue.http.options.root = 'http://localhost:97/api/'

Vue.component('TopSection', TopSection)
Vue.component('Navigation', Navigation)
Vue.component('FooterContact', FooterContact)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
