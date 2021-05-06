<template>
  <transition name="fade">
    <div news>
      <p v-for="item in fetchedNews" :key="item.id">
        <a :href="item.url" target="_blank">{{ item.title }}</a>
        <small> / {{ item.time_ago}} by
          <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
        </small>
      </p>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "NewsView",

  computed: {
    ...mapGetters(['fetchedNews']),
  },
  created() {
    this.$store.dispatch('FETCH_NEWS');
  }
}
</script>

<style>

</style>