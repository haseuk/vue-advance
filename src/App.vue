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
a:hover { color:#42b883; text-decoration: underline; }
a.router-link-exact-active { text-decoration: underline; }

ul.news-list .post { .-b(#eee);
  .points { .wh(80,60); .lh(60); .ib; .vam; .tc; color:#42b883; }
  .points + div { .ib; .vam; width:calc(100vw - 120px); }
  .new-title { .m(0); }
  .link-text { color:#828282; }
}
</style>
