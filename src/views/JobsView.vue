<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from "@/components/ListItem";

export default {
  name: "JobsView",
  components: {ListItem},

  created() {
    this.$store.dispatch('FETCH_JOBS')
  }
}
</script>

<style lang="less">
@import "~@/less/asset";
</style>