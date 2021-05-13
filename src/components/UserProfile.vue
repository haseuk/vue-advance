<template>
  <transition name="fade">
    <div profile>
      <section>
        <div class="user-container">
          <div><i class="fas fa-user"></i></div>
          <div class="user-description">
            <div>{{ info.id }}</div>
            <div class="time">{{ info.created }}</div>
          </div>
        </div>
      </section>
    </div>
  </transition>
</template>

<script>
export default {
  name: "UserProfile",
  props: { info:Object }

  // computed: {
  //   userInfo() {
  //     return this.$store.state.user;
  //   }
  // },
}
</script>

<style lang="less">
@import "~@/less/asset";
[profile] {
  section { .p(20); .-box; }
  .user-container { .flex; align-items: center; .pb(20);
    .fa-user { .fs(2.5rem); }
    .user-description { .pl(0.7rem); }
    .time { .fs(0.7rem); }
  }
}
</style>