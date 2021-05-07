<template>
  <transition name="fade">
    <div id="app">
      <tool-bar></tool-bar>
      <router-view></router-view>
    </div>
  </transition>
</template>

<script>
import ToolBar from "@/components/ToolBar";

export default {
  components: { ToolBar },
}
</script>

<style lang="less">
@import "~@/less/common";
@import "~@/less/base";
@import "~@/less/asset";

a.router-link-exact-active { text-decoration: underline; }
</style>
