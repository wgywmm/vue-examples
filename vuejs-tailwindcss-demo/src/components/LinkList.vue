<template>
  <div class="w-1/6">
    <router-link
      v-for="item in routes"
      :key="item.path"
      :to="item.path"
      class="block"
      >{{ item.path }}</router-link
    >
  </div>
</template>

<script>
import { routes } from "@/router/index.js";
export default {
  data() {
    return {
      routes: routes,
    };
  },
};
</script>

<style>
</style>