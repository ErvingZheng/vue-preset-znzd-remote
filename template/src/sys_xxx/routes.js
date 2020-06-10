import Layout from "./views/Layout.vue"; // 引用共用布局

// 自定义菜单
export const menuMap = [
  {
    path: "/menu1",
    name: "菜单一",
    component: Layout,
    children: [
      {
        path: "content1",
        name: "子菜单一",
        component: () => import("./views/Content1.vue")
      }
    ]
  },
  {
    path: "/menu2",
    name: "菜单二",
    component: Layout,
    children: [
      {
        path: "content2",
        name: "子菜单二",
        component: () => import("./views/Content2.vue")
      },
      {
        path: "content3",
        name: "子菜单三",
        component: () => import("./views/Content3.vue")
      }
    ]
  }
];
