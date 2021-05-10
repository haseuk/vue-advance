<template>
  <div>
    <ul class="news-list">
      <li v-for="(item, idx) in listItems" :key="item.id" class="post">
        <div class="points">{{ item.points || idx }}</div>
        <div>
          <p class="new-title">
            <a :href="item.url" v-if="item.domain">{{ item.title }}</a>
            <router-link :to="`item/${item.id}`" v-else>{{ item.title }}</router-link>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by
            <a :href="item.url" v-if="item.domain">{{ item.domain }}</a>
            <router-link :to="`/user/${item.user}`" v-else>{{ item.user }}</router-link>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ListItem",

  data() {
    return {
      page: ''
    }
  },
  watch: {
    page(v) {
      this.actionActive(v);
    }
  },

  // created() {
  //   let actionName;
  //   if (this.page === 'news') {
  //     actionName = 'FETCH_NEWS';
  //   } else if (this.page === 'ask') {
  //     actionName = 'FETCH_ASK';
  //   } else {
  //     actionName = 'FETCH_JOBS';
  //   }
  //   this.$store.dispatch(actionName);
  // },
  computed: {
    nowPage() {
      this.page = this.$route.name;
    }
  },
  methods: {
    actionActive(page) {
      const upperCasePage = page.toUpperCase();
      this.$store.dispatch(`FETCH_${upperCasePage}`);
    }
  },
  mounted() {
    this.nowPage();
  }
}
</script>

<style lang="less">
@import "~@/less/asset";
ul.news-list .post { .-b(#eee);
  .points { .wh(80,60); .lh(60); .ib; .vam; .tc; color:#42b883; }
  .points + div { .ib; .vam; width:calc(100vw - 120px); }
  .new-title { .m(0); }
  .link-text { color:#828282; }
}
</style>