import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Choice',
    component: () => import('../views/vChoice.vue')
  },
  {
    path: '/userRegister',
    name: 'User Register',
    component: () => import('../views/vUserRegister.vue')
  },
  {
    path: '/adminRegister',
    name: 'Admin Register',
    component: () => import('../views/vAdminRegister.vue')
  },
  {
    path: '/todolist',
    name: 'Todolist',
    component: () => import('../views/vTodo.vue')
  },
  {
    path: '/rating',
    name: 'Rating',
    component: () => import('../views/vRating.vue')
  },
  {
    path: '/createTask',
    name: 'Create task',
    component: () => import('../views/vCreateTask.vue')
  },
  {
    path: '/admin',
    name: 'Admin Panel',
    component:()=>import('../views/vAdminPanel.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
