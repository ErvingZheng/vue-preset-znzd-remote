<template>
  <el-container class="main-container" style="height:100%">
    <el-header class="main-header">
      <nav-header />
    </el-header>
    <el-main>
      <transition name="fade-transform" mode="out-in">
        <router-view />
      </transition>
    </el-main>
  </el-container>
</template>

<script>
import NavHeader from "../components/NavHeader";

export default {
  name: "Layout",
  components: {
    NavHeader
  }
};
</script>

<style lang="less" scoped>
.main-container {
  min-width: 1200px;
}
.main-header {
  padding: 0;
}
</style>
