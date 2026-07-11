import { createRouter, createWebHistory } from "vue-router";
import Start from "../pages/mobile/Start.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Start,
    },
  ],
});

export default router;
