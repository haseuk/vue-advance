<template>
  <transition name="fade">
    <div jobs>
      <div v-for="item in fetchedJobs">
        <a :href="item.url">{{ item.title }}</a>
        <small> / {{ item.time_ago}} / {{ item.domain }}</small>
      </div>
    </div>
  </transition>

</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "JobsView",

  computed: {
    ...mapGetters(['fetchedJobs']),
  },
  created() {
    this.$store.dispatch('FETCH_JOBS')
  }

}
</script>

<style>

</style>