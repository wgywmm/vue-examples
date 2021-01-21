<template>
  <div class="component">
    <h1>Border Opacity</h1>
    <hr class="my-4" />

    <h2>Usage</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-light-blue-50 to-light-blue-100 p-10">
      <div class="grid grid-cols-2 gap-2 sm:grid-cols-5">
        <div class="h-16 rounded border-4 border-light-blue-500 border-opacity-100 font-extrabold text-light-blue-600 flex justify-center items-center">100%</div>
        <div class="h-16 rounded border-4 border-light-blue-500 border-opacity-75 font-extrabold text-light-blue-600 flex justify-center items-center">75%</div>
        <div class="h-16 rounded border-4 border-light-blue-500 border-opacity-50 font-extrabold text-light-blue-600 flex justify-center items-center">50%</div>
        <div class="h-16 rounded border-4 border-light-blue-500 border-opacity-25 font-extrabold text-light-blue-600 flex justify-center items-center">25%</div>
        <div class="h-16 rounded border-4 border-light-blue-500 border-opacity-0 font-extrabold text-light-blue-600 flex justify-center items-center">0%</div>
      </div>
    </div>
    <hr class="my-4" />

  </div>
</template>

<script>
export default {};
</script>
