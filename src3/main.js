import Vue from 'vue'
import App from './App'
import store  from './store/index'

Vue.config.productionTip = false

const vm = new Vue({
  render: h => h(App),
  store,
  beforeCreate() {
    Vue.prototype.$bus = this; // 安装全局事件总线
  }
}).$mount('#app')

console.log(vm)