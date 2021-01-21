<template>
  <div class="w-1/5">
    <router-link
      v-for="item in routes"
      :key="item.path"
      :to="item.path"
      class="block m-1 p-1 border-4 border-light-blue-500 border-opacity-100"
    >{{ item.path }}</router-link>
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