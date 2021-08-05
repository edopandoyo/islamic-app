import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import Doa from '../views/DoaHarian'
import Tahlil from '@/views/Tahlil'
// import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/doa-harian',
    name: 'Doa Harian',
    component: Doa
  },
  {
    path: '/tahlil',
    name: 'Tahlil',
    component: Tahlil
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
