import { Pinia } from "pinia"
import { createRouter as createVueRouter, createWebHistory } from 'vue-router'

import Dashboard from '@/pages/Dashboard.vue'
import Login from '@/pages/Login.vue'
import Register from '@/pages/Register.vue'

import useAuthStore from "./stores/useAuthStore"

const routes = [
  {
    path: '/',
    beforeEnter: enforceAuthentication, // Authenticated routes...
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
      },
    ]
  },
  {
    path: '/',
    beforeEnter: rerouteLoggedInUser,
    children: [
      {
        path: '/login',
        name: 'login',
        component: Login,
      },
      {
        path: '/register',
        name: 'register',
        component: Register,
      },
    ]
  }
]

export function createRouter (_store: Pinia) {
  return createVueRouter({
    history: createWebHistory(),
    routes,
  })
}

// @ts-expect-error Ignore router types
function enforceAuthentication (_, __, next) {
  const authStore = useAuthStore()
  if(authStore.isLoggedIn()) {
    next()
  } else {
    next({ name: 'register' })
  }
}

// @ts-expect-error Ignore router types
function rerouteLoggedInUser (_, __, next) {
  const authStore = useAuthStore()
  if(authStore.isLoggedIn()) next({ name: 'dashboard' })
  else next()
}
