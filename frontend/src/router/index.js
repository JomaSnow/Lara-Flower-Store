import { createRouter, createWebHashHistory } from "vue-router";
import Product from "./../pages/Product.vue";
import About from "./../pages/About.vue";

const routes = [
  {
    path: "/",
    component: Product,
  },
  {
    path: "/about",
    component: About,
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
