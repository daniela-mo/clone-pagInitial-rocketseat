import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home.vue";
import Ignite from "../pages/Ignite.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/ignite",
    name: "Ignite",
    component: Ignite,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
