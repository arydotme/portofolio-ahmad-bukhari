import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Profile from '../components/Profile.vue'
import Portfolio from '../components/Portfolio.vue'

const routes = [
  { path: '/home', name: 'Home', component: Home },
  { path: '/profile', name: 'Profile', component: Profile },
  { path: '/portofolio', name: 'Portofolio', component: Portfolio }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
