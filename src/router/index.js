import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/404",
    component: () => import("@/views/404"),
  },
  {
    path: "/example",
    name: "Example",
    redirect: "/example/first",
    component: () => import("../views/Example"),
    children: [
      {
        path: "first",
        meta: { title: "初次使用", icon: "el-icon-edit" },
        component: () => import("../views/Example/component/first"),
      },
      {
        path: "second",
        meta: { title: "精灵图", icon: "el-icon-s-tools" },
        component: () => import("../views/Example/component/second"),
      },
      {
        path: "third",
        meta: { title: "精灵图", icon: "el-icon-star-off" },
        component: () => import("../views/Example/component/third"),
      },
    ],
  },
  // 404 page must be placed at the end !!!
  { path: "*", redirect: "/404" },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
