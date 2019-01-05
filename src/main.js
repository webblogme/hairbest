// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResources from 'vue-resource'

import VueCarousel from '@chenfengyuan/vue-carousel'

import TopSection from './components/TopSection'
import Navigation from './components/Navigation'
import LowerPart from './components/LowerPart'
import FooterContact from './components/FooterContact'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
Vue.component(VueCarousel.name, VueCarousel)

require('./assets/scss/main.scss')

Vue.use(VueResources)
Vue.http.options.root = 'http://www.hairbestphuket.com/engine/api/'

Vue.component('TopSection', TopSection)
Vue.component('Navigation', Navigation)
Vue.component('LowerPart', LowerPart)
Vue.component('FooterContact', FooterContact)

library.add(faStar)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
