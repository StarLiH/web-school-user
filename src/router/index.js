import { createRouter, createWebHistory } from 'vue-router'
import Home from 'views/HomePage/Home'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/join',
    name:'join',
    component:()=>import('views/Join/index'),
    children:[
      {
        path:'/login',
        name:'login',
        component:()=>import('components/Login/index')
      },
      {
        path:'/register',
        name:'register',
        component:()=>import('components/Login/Register')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

