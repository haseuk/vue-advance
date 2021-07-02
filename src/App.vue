<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <spinner :loading="loadingStatus"></spinner>
  </div>
</template>

<script>
import ToolBar from "@/components/ToolBar";
import Spinner from "@/components/Spinner";
import bus from "@/utils/bus";

export default {
  components: { ToolBar, Spinner },

  data(){
    return {
      loadingStatus: false,
    }
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    }
  },
  created() {
    bus.$on('start:spinner', this.startSpinner);
    bus.$on('end:spinner', this.endSpinner);
  },
  beforeDestroy() {
    bus.$off('start:spinner', this.startSpinner)
    bus.$off('end:spinner', this.endSpinner)
  }
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
