import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import Home from '../views/Home.vue'
import Login from '@/views/Login.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    name: 'Login',
    component: Login
  },
  {
    path: '/loginpassword',
    name: 'Password',
    component: () => import('@/views/LoginPassword.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/Register.vue')
  },
  {
    path: '/registermobile',
    name: 'RegisterMobile',
    component: () => import('@/views/RegisterMobile.vue')
  },
  {
    path: '/registeremail',
    name: 'RegisterEmail',
    component: () => import('@/views/RegisterEmail.vue')
  },
  {
    path: '/registerpassword',
    name: 'RegisterPassword',
    component: () => import('@/views/RegisterPassword.vue')
  },
  {
    path: '/account',
    name: 'Account',
    component: () => import('@/views/Account.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/views/Profile.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
