import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Profile from '../components/Profile.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Profile
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
