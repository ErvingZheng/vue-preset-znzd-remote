<template>
  <el-menu
    class="header-menu"
    :default-active="activeIndex"
    mode="horizontal"
    @select="handleSelect"
  >
    <template v-for="route in menuMap">
      <menu-item
        v-if="route.children && route.children.length > 0"
        :item="route"
        :key="route.path"
      ></menu-item>
      <menu-leaf v-else :item="route" :key="route.path"></menu-leaf>
    </template>
  </el-menu>
</template>

<script>
import MenuItem from "@/components/MenuItem";
import MenuLeaf from "@/components/MenuLeaf";
import { menuMap } from "../routes";
export default {
  name: "HeaderMenu",
  components: { MenuItem, MenuLeaf },
  data() {
    return {
      activeIndex: "1"
    };
  },
  computed: {
    menuMap() {
      return menuMap;
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      if (keyPath.length > 1) {
        this.$router.push({ path: keyPath.join("/") });
      } else {
        this.$router.push({ path: "/" + key });
      }
    }
  }
};
</script>

<style lang="less" soped>
.header-menu {
  padding-left: 200px;
}
</style>
