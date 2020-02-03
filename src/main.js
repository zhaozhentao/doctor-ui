import Vue from 'vue'
import {Skeleton} from 'vant';
import 'vant/lib/index.css';
import VueRouter from 'vue-router'
import router from './routes/index'
import App from "./App";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(VueRouter)
Vue.use(Skeleton);
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
