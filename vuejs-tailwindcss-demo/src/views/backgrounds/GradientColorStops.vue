<template>
  <div class="component">
    <h1>Gradient Color Stops</h1>
    <hr class="my-4" />

    <h2>Starting color</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-gray-50 to-gray-100 p-10">
      <div class="h-24 bg-gradient-to-r from-red-500"></div>
    </div>
    <hr class="my-4" />

    <h2>Ending color</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-gray-50 to-gray-100 p-10">
      <div class="h-24 bg-gradient-to-r from-teal-400 to-blue-500"></div>
    </div>
    <hr class="my-4" />

    <h2>Middle color</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-gray-50 to-gray-100 p-10">
      <div class="h-24 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"></div>
    </div>
    <hr class="my-4" />

  </div>
</template>

<script>
export default {};
</script>
