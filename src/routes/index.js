import VueRouter from "vue-router";
import Home from "../components/Home";
import Detail from "../components/Detail";
import VM from "../components/VM";
import Memory from "../components/Memory";
import Thread from "../components/Thread";

const routes = [
  {
    path: '/jvm/:id',
    component: Detail,
    children: [{
      path: 'vm',
      component: VM
    }, {
      path: 'memory',
      component: Memory
    }, {
      path: 'thread',
      component: Thread
    }]
  },
  {path: '/*', component: Home},
];

export default new VueRouter({
  routes
});
