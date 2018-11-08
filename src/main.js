// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 导入ElementUI组件库
import ElementUI from 'element-ui'
// 导入ElementUI样式
import 'element-ui/lib/theme-chalk/index.css'
// 导入公共的css文件
import './assets/common.css'

// 使用element-ui
Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
