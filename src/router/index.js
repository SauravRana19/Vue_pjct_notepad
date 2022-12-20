import { createRouter, createWebHistory } from 'vue-router'
  import home from '@/views/Home.vue'
  import Register from '@/components/register.vue'
  import Userpage from '@/components/userPage.vue'
  import Login from '@/components/login.vue'

const routes = [
  {
    path: '/',
    name: 'ho-me',
    component: home
  },
  {
    path: '/register',
    name: 'regi-ster',
    component: Register
  },
  {
    path: '/user',
    name: 'us-er',
    component: Userpage
  },
  {
    path: '/login',
    name: 'log-in',
    component: Login
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
