import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 重置一下样式
import './assets/css/reset.css'

// 引入一下element-ui的样式,注册一下element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
