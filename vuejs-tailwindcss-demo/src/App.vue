<template>
  <div id="app">
    <div class="flex">
      <link-list class="flex-none h-screen overflow-y-scroll p-4" />
      <router-view class="flex-1 h-screen overflow-y-scroll p-4" />
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
