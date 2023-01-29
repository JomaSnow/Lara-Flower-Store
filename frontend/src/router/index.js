import { createRouter, createWebHashHistory } from "vue-router";
import Product from "./../pages/Product.vue";
import About from "./../pages/About.vue";

const routes = [
  {
    path: "/",
    component: About,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/products",
    component: Product,
  },
  {
    path: "/products/:id",
    component: About,
  },
  {
    path: "/login",
    component: About,
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
