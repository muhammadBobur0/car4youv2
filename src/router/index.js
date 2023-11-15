import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/product',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('../views/Orders.vue')
    }
    ,
    {
      path: '/admin/:nomer',
      name: 'adminka',
      component: () => import('../views/Admin.vue')
    }
  ]
})

export default router
