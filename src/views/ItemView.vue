<template>
  <transition name="fade">
    <div item>
      <section>
        <user-profile :info="item"></user-profile>
<!--        <div class="user-container">-->
<!--          <div><i class="fas fa-user"></i></div>-->
<!--          <div class="user-description">-->
<!--            <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>-->
<!--            <div class="time">{{ item.time_ago }}</div>-->
<!--          </div>-->
<!--        </div>-->
      </section>
      <section>
        <h2>{{ item.title }}</h2>
      </section>
      <section>
        <div v-html="item.content"></div>
      </section>
    </div>
  </transition>

</template>

<script>
import UserProfile from "@/components/UserProfile";

export default {
  name: "ItemView",
  components: {UserProfile},
  computed: {
    item() {
      return this.$store.state.item;
    }
  },
  created() {
    const itemId = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', itemId);
  }
}
</script>

<style lang="less">
@import '~@/less/asset';
[item] {
  section { .p(20); .-box; }
  .user-container { .flex; align-items: center; .pb(20);
    .fa-user { .fs(2.5rem); }
    .user-description { .pl(0.7rem); }
    .time { .fs(0.7rem); }
  }
}
</style>