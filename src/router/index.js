import { createRouter, createWebHistory } from 'vue-router'
import Home from 'views/HomePage/Home'
import cookie from "js-cookie"
import { ElMessage } from 'element-plus'


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
        path: '/courses',
        name: '/courses',
        component: () => import('views/courses/index'),
        beforeEnter: (to, from, next) => {
          let user = cookie.get("user_info")
          //console.log(user === undefined)
          if (user === undefined) {
            ElMessage.warning({
              message: '请先登录~',
              type: 'warning'
            });
            next('/join/login')
          } else {
            next()
          }
        }
      },
      {
        path: '/courses/:id',
        name: 'coursesId',
        component: () => import('views/courses/_id'),
        beforeEnter: (to, from, next) => {
          let user = cookie.get("user_info")
          //console.log(user === undefined)
          if (user === undefined) {
            ElMessage.warning({
              message: '请先登录~',
              type: 'warning'
            });
            next('/join/login')
          } else {
            next()
          }
        }
      },
      {
        path: '/teachers',
        name: 'teachers',
        component: () => import('views/teachers/index'),
        beforeEnter: (to, from, next) => {
          let user = cookie.get("user_info")
          //console.log(user === undefined)
          if (user === undefined) {
            ElMessage.warning({
              message: '请先登录~',
              type: 'warning'
            });
            next('/join/login')
          } else {
            next()
          }
        }
      },
      {
        path: '/teachers/:id',
        name: 'teachersId',
        component: () => import('views/teachers/_id'),
        beforeEnter: (to, from, next) => {
          let user = cookie.get("user_info")
          //console.log(user === undefined)
          if (user === undefined) {
            ElMessage.warning({
              message: '请先登录~',
              type: 'warning'
            });
            next('/join/login')
          } else {
            next()
          }
        }
      }
    ]
  },
  {
    path: '/player/:vid',
    name: 'video',
    component: () => import('views/video/_vid'),
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
    redirect: '/studentcenter/stumsg',
    component: () => import('views/user/student'),
    children: [
      {
        path: 'stumsg',
        name: 'stumsg',
        component: () => import('components/studentNav/stumsg')
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
        path: '/teachercenter/administer',
        name: 'administer',
        component: () => import('components/teacherNav/administer')
      },
      {
        path: '/teachercenter/manage',
        name: 'manage',
        component: () => import('components/teacherNav/manage'),
        children: [
          {
            path: '/teachercenter/manage/info',
            name: 'info',
            component: () => import('components/course/info')
          },
          {
            path: '/teachercenter/manage/info/:id',
            name: 'message',
            component: () => import('components/course/info'),
            hidden: true
          },
          {
            path: '/teachercenter/manage/chapter/:id',
            name: 'chapter',
            component: () => import('components/course/chapter'),
            hidden: true
          },
          {
            path: '/teachercenter/manage/publish/:id',
            name: 'publish',
            component: () => import('components/course/publish'),
            hidden: true
          }
        ]
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
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// router.beforeEach((to, from, next) => {
//   let showUser = cookie.get("user_info");
//   //整个是一个字符串，需要转换为对象
//   if (to.path != '/join/login' && showUser == '') {
//     alert('您还没有登录，请先登录');
//     next('/join/login');
//   } else {
//     next();
//   }
// })

export default router

