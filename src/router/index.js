import { createRouter, createWebHistory } from 'vue-router'
import SplashView from '../views/SplashView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Splash',
      component: SplashView
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/auth',
      name: 'Auth',
      component: () => import('../views/AuthView.vue')
    },
    {
      path: '/admin',
      name: 'Admin',
      component: () => import('../views/AdminView.vue')
    },
    {
      path: '/how-to-pay',
      name: 'Pay',
      component: () => import('../views/PayView.vue')
    },
    {
      path: '/vip-access',
      name: 'Vip',
      component: () => import('../views/VipView.vue')
    },
    {
      path: '/live',
      name: 'Details',
      params: true,
      component: () => import('../views/DetailsView.vue')
    },
    {
      path: '/settings',
      name: 'Settings',
      component: () => import('../views/SettingsView.vue')
    },
    {
      path: '/news',
      name: 'News',
      component: () => import('../views/NewsView.vue')
    },
    {
      path: '/news/specific',
      name: 'Specific',
      component: () => import('../views/SpecificView.vue')
    },
    {
      path: '/Prediction',
      name: 'Upcoming',
      component: () => import('../views/Upcoming.vue')
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
