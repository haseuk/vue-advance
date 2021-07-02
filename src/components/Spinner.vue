<template>
  <div class="lds-facebook" v-if="loading" spinner>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "Spinner",
  props: {
    loading: {
      type: Boolean,
      required: true,
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@/less/asset";
[spinner] {
  &.lds-facebook { .ib; .abs; .wh(64,64); .lt(47%,47%);
    & div { .ib; .abs; .l(6); .w(13); .bgc(#42b883); animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite; }
    & div:nth-child(1) { .l(6); animation-delay: -0.24s; }
    & div:nth-child(2) { .l(26); animation-delay: -0.12s; }
    & div:nth-child(3) { .l(45); animation-delay: 0s; }
  }
  @keyframes lds-facebook {
    0% {
      top: 6px; height: 51px;
    }
    50%, 100% {
      top: 19px; height: 26px;
    }
  }
}
</style>