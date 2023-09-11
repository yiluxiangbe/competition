import Vue from 'vue'
import App from './App.vue'
// 导入路由
import router from '@/router/index'
// 引入mockserve.js进行数据模拟，这里直接引入就行，执行一遍这个文件就行
import '@/mock/mockServe.js'

// 导入全局组件,这里是分页搜索组件
import Page from '@/page/admin/page/index.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

Vue.component('Page', Page)
Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  router
}).$mount('#app')
