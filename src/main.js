// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import iView from 'iview'
import 'iview/dist/styles/iview.css';

Vue.config.productionTip = false
//全局配置axios
axios.defaults.baseURL="http://www.wyxjava.com/wyxjava/"
Vue.prototype.axios = axios; //添加原型对象,组件中可以直接使用this.axios
// axios.defaults.baseURL="http://localhost:8001/wyxjava/"

Vue.use(iView); //使用iView样式

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
