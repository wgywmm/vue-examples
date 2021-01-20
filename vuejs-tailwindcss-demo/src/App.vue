<template>
  <div id="app">
    <div class="flex">
      <link-list class="flex-none" />
      <router-view class="flex-1" />
    </div>
  </div>
</template>

<script>
import LinkList from "@/components/LinkList.vue";
export default {
  components: {
    LinkList,
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>
