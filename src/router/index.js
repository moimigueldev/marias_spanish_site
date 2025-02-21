import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import PricingView from '../views/PricingView.vue'
import FAQView from '../views/FAQView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {

      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: PricingView,
    },
    {
      path: '/faq',
      name: 'faq',
      component: FAQView,
    },
  ],
})

export default router
