<template>
  <div header>
    <router-link to="/news">news</router-link>
    <router-link to="/ask">ask</router-link>
    <router-link to="/jobs">jobs</router-link>
  </div>
</template>

<script>
export default {
  name: "ToolBar"
}
</script>

<style lang="less">
@import "~@/less/asset";
[header] { color:white; .bgc(#42b883); .flex; .p(8);
  .router-link-exact-active { color:#35495e; }
  a { color:white; .m(0,5); }
}
</style>