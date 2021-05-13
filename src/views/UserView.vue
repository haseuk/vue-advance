<template>
  <transition name="fade">
    <div user>
      <user-profile :info="userInfo"></user-profile>
    </div>
  </transition>
</template>

<script>
import UserProfile from "@/components/UserProfile";

export default {
  name: "UserView",
  components: { UserProfile },

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