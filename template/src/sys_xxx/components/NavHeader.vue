<template>
  <div class="nav-header">
    <header-logo></header-logo>
    <header-menu></header-menu>
    <user-info></user-info>
  </div>
</template>

<script>
import HeaderLogo from "@/components/HeaderLogo.vue";
import UserInfo from "@/components/UserInfo.vue";
import HeaderMenu from "./HeaderMenu.vue";
export default {
  name: "NavHeader",
  components: { HeaderLogo, UserInfo, HeaderMenu }
};
</script>

<style lang="less" soped>
.nav-header {
  width: 100%;
  position: relative;
}
</style>
