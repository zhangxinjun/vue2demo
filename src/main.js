import Vue from 'vue'
import App from './App.vue'

import Directives from "./util/directive"

Vue.use(Directives)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
