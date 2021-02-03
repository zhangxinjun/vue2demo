import Vue from 'vue'
import App from './App.vue'
import axios from "axios";

import Directives from "./util/directive"
import LazyLoad from "./util/lazyload"

Vue.prototype.$axios = axios;
// axios.defaults.baseURL = "/api"

Vue.use(Directives)
Vue.use(LazyLoad,{default:"https://www.baidu.com/img/flexible/logo/pc/result.png"})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
