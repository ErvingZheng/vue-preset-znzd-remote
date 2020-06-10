const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  // 运行端口
  devServer: {
    port: 3006
  },
  // 配置目录别名，alias
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@api", resolve("src/api"))
      .set("@utils", resolve("src/utils"))
      .set("@assets", resolve("src/assets"))
      .set("@sys_xxx", resolve("src/sys_xxx"));
  }
};
