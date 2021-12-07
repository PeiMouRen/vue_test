import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import router from './router/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueRouter)

const vm = new Vue({
  render: h => h(App),
  router: router,
  beforeCreate() {
    Vue.prototype.$bus = this; // 安装全局事件总线
  }
}).$mount('#app')

console.log(vm)