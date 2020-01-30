import VueRouter from "vue-router";
import Home from "../components/Home";

const routes = [
  {path: '/ui', component: Home},
];

export default new VueRouter({
  mode: 'history',
  routes
});
