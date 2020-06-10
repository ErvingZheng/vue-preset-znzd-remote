import Vue from "vue";
import VueRouter from "vue-router";
import { AllRoutes } from "./routes";
Vue.use(VueRouter);

// 仅在页面刷新后进行加载
export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: AllRoutes
});
