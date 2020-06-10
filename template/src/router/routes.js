import { menuMap as sysOneRoutes } from "@sys_xxx/routes";

// 公共路由
export const commonRoutes = [
  {
    path: "/",
    name: "index",
    redirect: "login",
    hidden: true
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login.vue")
  },
  {
    path: "/404",
    name: "页面不存在",
    component: () => import("@/views/404.vue"),
    hidden: true
  }
];

// 404跳转需要放在最后
export const noMatchRedirect = [
  {
    path: "*",
    redirect: "/404",
    hidden: true
  }
];

export const AllRoutes = [...commonRoutes, ...sysOneRoutes, ...noMatchRedirect];
