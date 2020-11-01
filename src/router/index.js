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
  },
  {
    path: '/choiceUserAdmin',
    name: 'Choice User Admin',
    component:()=>import('../views/vChoiceUserAdmin.vue')
  },
  {
    path: '/adminRating',
    name: 'Admin rating',
    component:()=>import('../views/vAdminRating.vue')
  },
  {
    path: '/teamUsers',
    name: 'Team users',
    component:()=>import('../views/vTeamUser.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
