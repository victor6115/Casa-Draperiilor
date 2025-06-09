import { createWebHistory, createRouter } from "vue-router";

const routes = [
  { path: "/", component: () => import("./Home.vue") },
  { path: "/products", component: () => import("./Products.vue") },
  { path: "/blog", component: () => import("./Blog.vue") },
  { path: "/categories", component: () => import("./Categories.vue") },
  { path: "/about", component: () => import("./About.vue") },
  { path: "/contact", component: () => import("./Contact.vue") },
  { path: "/faq", component: () => import("./Faq.vue") },
  { path: "/cart", component: () => import("./Cart.vue") },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
