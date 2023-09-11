// 导入包
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/page/login/index.vue'
import Home from '@/page/home/index.vue'
import Zxdt from '@/page/zxdt/index.vue'
import Admin from '@/page/admin/index.vue'
import Hot from '@/page/admin/hot/index.vue'
import Answer from '@/page/admin/answer/index.vue'
import Root from '@/page/admin/root/index.vue'
import UpdateButton from '@/page/admin/button/UpdateButton.vue'
import Ddcj from '@/page/home/ddcj/index.vue'
import Zjgs from '@/page/home/zjgs/index.vue'
import Xxls from '@/page/home/xxls/index.vue'
import Rdrp from '@/page/home/rdrp/index.vue'
import Xxgc from '@/page/home/xxgc/index.vue'
import arrRouter from './arrRouter.js'
// use函数是用来在vue中导入插件的
Vue.use(VueRouter)

// 创建路由的实例对象
const router = new VueRouter({
  // routers是一个数组，在这里面写hash与其组件的对应关系
  // path后面是hash地址，component是组件
  routes: [
    // 第一条是默认显示的组件(重定向的路由规则，相当于在已知规则进行使用)
    // 从上到下进行匹配
    { path: '', redirect: '/home' },
    { path: '/login', component: Login },
    { path: '/home', component: Home },
    { path: '/ddcj', component: Ddcj },
    { path: '/rdrp', component: Rdrp },
    { path: '/zjgs', component: Zjgs },
    { path: '/xxls', component: Xxls },
    { path: '/zxdt', component: Zxdt },
    { path: '/xxgc', component: Xxgc },
    {
      path: '/admin',
      component: Admin,
      children: [
        {
          // 管理热评
          path: 'hot',
          component: Hot
        },
        {
          // 管理答题题库
          path: 'answer',
          component: Answer,
          children: [{ path: 'update', component: UpdateButton, props: true }]
        },
        {
          // 管理用户
          path: 'root',
          component: Root
        }
      ]
    }
    // ：后面跟参数名
    // props: true开启，方便拿到路由的参数值
    // { path: '/search/:keyword?', component: Search, name: 'search' }
  ]
})

// 在这里面重写VueRouter原型上面的push方法
// 重写的目的是加上回调函数
// 先保存之前的push方法
const originPush = VueRouter.prototype.push
// 重写push方法
// 我们要保证调用originPush的函数上下文一致，不然就会出现错误
// this的指向就是函数上下文，这里没有改变originPush的函数上下文之前，this的指向是window,而不是vueRouter这个实例对象
// 所以我们需要通过call和apply方法来改变函数上下文
VueRouter.prototype.push = function (location, resolve, reject) {
  // 如果我们跳转路由的时候带上了失败与的错误的回调函数
  if (resolve && reject) {
    // 这里的this指向的就是VueRouter实例对象
    originPush.call(this, location, resolve, reject)
  } else {
    originPush.call(
      this,
      location,
      () => {},
      () => {}
    )
  }
}

// 前端路由守卫
// 全局前置守卫
router.beforeEach((to, from, next) => {
  // arrRouter.indexOf(to.path)这个方法就是在arrRouter数组中查询to.path，并且返回索引值
  console.log(arrRouter)
  if (arrRouter.indexOf(to.path) !== -1) {
    const token = localStorage.getItem('token')
    // 如果没有token就登录
    if (token) {
      console.log('有token')
      next()
    } else {
      console.log('没有token')
      next('/login')
    }
  } else {
    next()
  }
})

// 向外导出实例对象
// 然后需要在main.js中挂载路由
export default router
