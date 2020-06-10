<template>
  <el-menu-item v-if="!item.hidden" :index="item.path" :key="item.path">{{
    item.name
  }}</el-menu-item>
</template>

<script>
export default {
  name: "MenuLeaf",
  props: {
    item: { type: Object, required: true }
  }
};
</script>
