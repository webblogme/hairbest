import Vue from 'vue'
import Router from 'vue-router'
import WelcomePage from '@/components/WelcomePage'
import HaircutHairstyle from '@/components/HaircutHairstyle'
import ProfessionalHaircare from '@/components/ProfessionalHaircare'
import SpaTreatments from '@/components/SpaTreatments'
import PhuketHairShop from '@/components/PhuketHairShop'
import Meta from 'vue-meta'

Vue.use(Router)
Vue.use(Meta)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'WelcomePage',
      component: WelcomePage
    },
    { path: '/haircut-hairstyle', component: HaircutHairstyle },
    { path: '/professional-haircare', component: ProfessionalHaircare },
    { path: '/spa-treatments', component: SpaTreatments },
    { path: '/phuket-hair-shop', component: PhuketHairShop }
  ]
})
