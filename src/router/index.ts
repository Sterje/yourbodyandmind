import { createRouter, createWebHistory } from 'vue-router'
import MainMobile from '../pages/MainMobile.vue'
import Treatments from '../pages/Treatments.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainMobile
    },
    {
      path: '/behandlingar',
      name: 'treatments',
      component: Treatments
    }
  ]
})

export default router
