<template>
  <transition name="fade">
    <div user>
      <p>name: {{ userInfo.id }}</p>
      <p>karma: {{ userInfo.karma }}</p>
      <p>created: {{ userInfo.created }}</p>
    </div>
  </transition>
</template>

<script>
export default {
  name: "UserView",

  computed: {
    userInfo() {
      return this.$store.state.user;
    }
  },
  created() {
    const userName = this.$route.params.id;
    this.$store.dispatch('FETCH_USER', userName)
  }
}
</script>

<style>

</style>