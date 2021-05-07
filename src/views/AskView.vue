<template>
  <transition name="fade">
    <div ask>
      <p v-for="item in fetchedAsk">
        <router-link :to="`/item/${item.id}`">{{ item.title }}</router-link>
        <small> / {{ item.time_ago }} / {{ item.user }}</small>
      </p>
    </div>
  </transition>

</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "AskView",

  computed: {
    ...mapGetters(['fetchedAsk']),
  },
  created() {
    this.$store.dispatch('FETCH_ASK');
  }
}
</script>

<style>

</style>