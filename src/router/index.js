import Vue from 'vue'
import Router from 'vue-router'
// 导入登录组件
import Login from '@/components/Login'
// 导入home 组件
import Home from '@/components/Home'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    { path: '/home', component: Home }
  ]
})

// 给路由对象设置导航守卫
router.beforeEach((to, from, next) => {
  // console.log(to, from, next)
  let token = localStorage.getItem('token')
  // 判断是否有token 如果有就放行 没有拦到登录页
  if (to.path === '/login' || token) {
    next()
  } else {
    next('/login')
  }
})
// 导出路由对象
export default router
