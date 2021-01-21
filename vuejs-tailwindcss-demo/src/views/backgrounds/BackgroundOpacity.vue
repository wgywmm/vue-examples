<template>
  <div class="component">
    <h1>Background Color</h1>
    <hr class="my-4" />

    <h2>Usage</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-indigo-50 to-indigo-100 p-10">
      <div class="grid grid-cols-2 gap-2 sm:grid-cols-5">
        <div class="h-16 rounded-md bg-opacity-100 bg-indigo-600 font-extrabold text-white flex justify-center items-center">100%</div>
        <div class="h-16 rounded-md bg-opacity-75 bg-indigo-600 font-extrabold text-white flex justify-center items-center">75%</div>
        <div class="h-16 rounded-md bg-opacity-50 bg-indigo-600 font-extrabold text-white flex justify-center items-center">50%</div>
        <div class="h-16 rounded-md bg-opacity-25 bg-indigo-600 font-extrabold text-white flex justify-center items-center">25%</div>
        <div class="h-16 rounded-md bg-opacity-0 bg-indigo-600 font-extrabold text-white flex justify-center items-center">0%</div>
      </div>
    </div>
    <hr class="my-4" />

  </div>
</template>

<script>
export default {};
</script>
