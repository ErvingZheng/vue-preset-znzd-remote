module.exports = (api, options, rootOptions) => {
  // 修改 `package.json` 里的字段
  api.extendPackage({
    dependencies: {
      axios: "^0.18.0",
      "element-ui": "^2.5.4",
      "vue-router": "^3.0.1",
      vuex: "^3.0.1",
      "vuex-persistedstate": "^2.5.4",
    },
  });

  // 复制并用 ejs 渲染 `./template` 内所有的文件
  api.render("./template");
};
