import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/framework/sub-modules/pages/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/product/:id",
    name: "product",
    component: () =>
      import("@/framework/sub-modules/components/ProductDetail.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("@/framework/sub-modules/pages/Cart.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
