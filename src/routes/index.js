import VueRouter from "vue-router";
import Home from "../components/Home";
import Detail from "../components/Detail";
import VM from "../components/VM";
import Memory from "../components/Memory";
import Thread from "../components/Thread";
import HeapObjects from "../components/Objects";
import ClassDetail from "../components/ClassDetail";
import ObjectDetail from "../components/ObjectDetail";

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
    }, {
      path: 'class',
      component: HeapObjects
    }, {
      path: 'class/:classId',
      component: ClassDetail
    }, {
      path: 'objects/:objectId',
      component: ObjectDetail
    }]
  },
  {path: '/*', component: Home},
];

export default new VueRouter({
  routes,
  mode: 'history',
});
