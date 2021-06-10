import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home.vue";
import Discover from "../pages/Discover.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/discover",
    name: "Discover",
    component: Discover,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
