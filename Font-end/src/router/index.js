import { createWebHistory, createRouter } from "vue-router";
import Products from "@/components/Products.vue"
const routes = [
  {
    path:"/",
    name:"/",
    component:Products,
  },
  {
    path: "/",
    name: "login",
    component:()=>import("@/components/Login.vue"),
    
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
export default router;
