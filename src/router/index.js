import { createRouter, createWebHistory } from 'vue-router'
import Home from 'views/HomePage/Home'

const routes = [
  {
    path: '/',
    name: 'Home',
    //redirect:"courses",
    component: Home,
    children: [
      {
        path: '/',
        name: 'onepage',
        component: () => import('views/onepage/index')
      },
      {
        path: 'courses',
        name: 'courses',
        component: () => import('views/courses/index')
      },
      {
        path: 'teachers',
        name: 'teachers',
        component: () => import('views/teachers/index')
      }
    ]
  },
  {
    path: '/join',
    name: 'join',
    component: () => import('views/Join/index'),
    children: [
      {
        path: '/join/login',
        name: 'login',
        component: () => import('components/Login/index')
      },
      {
        path: '/join/register',
        name: 'register',
        component: () => import('components/Login/Register')
      }
    ]
  },
  {
    path: '/studentcenter',
    name: 'student',
    redirect:'/studentcenter/stumsg',
    component: () => import('views/user/student'),
    children: [
      {
        path: 'stumsg',
        name: 'stumsg',
        component: () => import('components/studentNav/stumsg')
      },
      {
        path: 'stuavatar',
        name: 'stuavatar',
        component: () => import('components/studentNav/stuavatar')
      },
      {
        path: 'stucourse',
        name: 'stucourse',
        component: () => import('components/studentNav/course')
      },
      {
        path: 'stuexam',
        name: 'stuexam',
        component: () => import('components/studentNav/exam')
      },
      {
        path: 'stuques',
        name: 'stuques',
        component: () => import('components/studentNav/question')
      }
    ]
  },
  {
    path: '/teachercenter',
    name: 'teachercenter',
    component: () => import('views/user/teacher'),
    children: [
      {
        path: '/teachercenter/msg',
        name: 'msg',
        component: () => import('components/teacherNav/teacenter')
      },
      {
        path: '/teachercenter/course',
        name: 'course',
        component: () => import('components/teacherNav/course')
      },
      {
        path: '/teachercenter/manage',
        name: 'manage',
        component: () => import('components/teacherNav/manage')
      },
      {
        path: '/teachercenter/exam',
        name: 'exam',
        component: () => import('components/teacherNav/exam')
      },
      {
        path: '/teachercenter/read',
        name: 'read',
        component: () => import('components/teacherNav/read')
      },
      {
        path: '/teachercenter/collect',
        name: 'collect',
        component: () => import('components/teacherNav/collect')
      },
      {
        path: '/teachercenter/record',
        name: 'record',
        component: () => import('components/teacherNav/record')
      },
      {
        path: '/teachercenter/question',
        name: 'question',
        component: () => import('components/teacherNav/question')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

