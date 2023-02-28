import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LearnView from '../views/LearnView.vue'
import CalculatorView from '../views/CalculatorView.vue'
import IfView from '../views/ifView.vue'
import ForView from '../views/ForView.vue'
import ApiView from '../views/ApiView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/learn',
      name: 'learn',
      component: LearnView
    },
    {
      path: '/calculator',
      name: 'calculator',
      component: CalculatorView
    },
    {
      path: '/if',
      name: 'if',
      component: IfView
    },
    {
      path: '/for',
      name: 'for',
      component: ForView
    },
    {
      path: '/api',
      name: 'api',
      component: ApiView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
