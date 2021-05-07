<template>
  <transition name="fade">
    <div news>
      <ul class="news-list">
        <li v-for="item in fetchedNews" :key="item.id" class="post">
          <div class="points">{{ item.points }}</div>
          <div>
            <p class="new-title"><a :href="item.url">{{ item.title }}</a></p>
            <small class="link-text">
              by
              <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
            </small>
          </div>
        </li>
      </ul>
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

<style lang="less">
@import "~@/less/asset";
[news] {
  .post { .-b(#eee);
    .points { .wh(80,60); .lh(60); .ib; .vam; .tc; color:#42b883; }
    .points + div { .ib; .vam; width:calc(100vw - 120px); }
    .new-title { .m(0); }
    .link-text { color:#828282; }
  }
}
</style>