import Vue from 'vue'
import Vant from 'vant';
import 'vant/lib/index.css';
import VueRouter from 'vue-router'
import router from './routes/index'
import App from "./App";

Vue.use(VueRouter)
Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
