<template>
  <div class="header-info">
    <el-dropdown trigger="hover" class="info-box" @command="handleCommand">
      <span class="el-dropdown-link">
        超级管理员
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>个人设置</el-dropdown-item>
        <el-dropdown-item>系统设置</el-dropdown-item>
        <el-dropdown-item divided command="logout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: "UserInfo",
  methods: {
    handleCommand(command) {
      if (command === "logout") {
        sessionStorage.clear();
        this.$router.push("/");
      }
    }
  }
};
</script>

<style lang="less" soped>
.header-info {
  position: absolute;
  right: 30px;
  top: 0;
  height: 60px;
  line-height: 60px;
  .info-box {
    .el-dropdown-link {
      cursor: pointer;
      color: #409eff;
    }
  }
}
</style>
