<template>
  <div class="component">
    <h1>Transition Property</h1>
    <hr class="my-4" />

    <h2>Usage</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-light-blue-50 to-light-blue-100 p-10">
      <div class="text-center">
        <button class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-blue-600 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-md">
          Hover me
        </button>
      </div>
    </div>
    <hr class="my-4" />

  </div>
</template>

<script>
export default {};
</script>
