import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: { name: "page-1" },
  },
  {
    path: "/page-1",
    name: "page-1",
    component: () => import("@/views/Page1.vue"),
  },
  {
    path: "/page-2",
    name: "page-2",
    component: () => import("@/views/Page2.vue"),
  },
  {
    path: "/page-3",
    name: "page-3",
    component: () => import("@/views/Page3.vue"),
  },
  {
    path: "/page-4",
    name: "page-4",
    component: () => import("@/views/Page4.vue"),
  },
  {
    path: "/page-5",
    name: "page-5",
    component: () => import("@/views/Page5.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
