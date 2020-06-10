<template>
  <el-submenu v-if="!item.hidden" :index="item.path" :key="item.path">
    <template slot="title">{{ item.name }}</template>
    <template v-for="child in item.children">
      <menu-item
        v-if="child.children && child.children.length > 0"
        :item="child"
        :key="child.path"
      ></menu-item>
      <menu-leaf v-else :item="child" :key="child.path"></menu-leaf>
    </template>
  </el-submenu>
</template>

<script>
import MenuLeaf from "@/components/MenuLeaf";
export default {
  name: "MenuItem",
  components: { MenuLeaf },
  props: {
    item: { type: Object, required: true }
  }
};
</script>
