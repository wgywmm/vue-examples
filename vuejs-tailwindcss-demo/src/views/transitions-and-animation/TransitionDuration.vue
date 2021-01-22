<template>
  <div class="component">
    <h1>Transition Duration</h1>
    <hr class="my-4" />

    <h2>Usage</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-emerald-50 to-teal-100 p-10">
      <div class="flex justify-around items-center">
        <button class="transition duration-150 ease-in-out transform hover:scale-125 bg-emerald-600 text-white font-semibold py-3 px-6 rounded-md">
          Hover me
        </button>
        <button class="transition duration-300 ease-in-out transform hover:scale-125 bg-emerald-600 text-white font-semibold py-3 px-6 rounded-md">
          Hover me
        </button>
        <button class="transition duration-700 ease-in-out transform hover:scale-125 bg-emerald-600 text-white font-semibold py-3 px-6 rounded-md">
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
