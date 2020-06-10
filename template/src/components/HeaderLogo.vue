<template>
  <div class="header-logo">研发管理系统</div>
</template>

<script>
export default {
  name: "HeaderLogo"
};
</script>

<style lang="less" soped>
.header-logo {
  position: absolute;
  left: 0;
  top: 0;
  width: 180px;
  height: 60px;
  z-index: 1000;
  padding-left: 70px;
  line-height: 60px;
  background-image: url(~@assets/logo.png);
  background-size: 40px 40px;
  background-repeat: no-repeat;
  background-position: 20px 9px;
  font-weight: bold;
}
</style>
