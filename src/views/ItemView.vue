<template>
  <transition name="fade">
    <div item>
      <p>title: {{ item.title }}</p>
      <p>user: {{ item.user }}</p>
      <p>content: <br>{{ item.content }}</p>
    </div>
  </transition>

</template>

<script>
export default {
  name: "ItemView",

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

<style>

</style>