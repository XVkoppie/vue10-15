import Vue from 'vue'
import App from './App.vue'
import store from './store'
import 'tailwindcss/tailwind.css'
import '@/assets/font/iconfont.css'
Vue.config.productionTip = false
Vue.directive('focus', {
  // 指令所在的dom元素，被插入到页面中时触发
  inserted (el) {
    el.focus()
  }
})
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
