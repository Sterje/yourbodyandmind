import { createRouter, createWebHistory } from "vue-router";
import MainMobile from "../pages/MainMobile.vue";
import Treatments from "../pages/Treatments.vue";
import Sandra from "../pages/Sandra.vue";
import Samtal from "../pages/Samtal.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: MainMobile,
    },
    {
      path: "/behandlingar",
      name: "treatments",
      component: Treatments,
    },
    {
      path: "/sandra",
      name: "sandra",
      component: Sandra,
    },
    {
      path: "/samtal",
      name: "samtal",
      component: Samtal,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top when navigating
    return { top: 0 };
  },
});

export default router;
