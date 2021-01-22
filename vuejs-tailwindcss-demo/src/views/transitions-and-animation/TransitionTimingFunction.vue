<template>
  <div class="component">
    <h1>Transition Timing Function</h1>
    <hr class="my-4" />

    <h2>Usage</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-indigo-50 to-indigo-100 p-10">
      <div class="flex justify-around items-center">
        <button class="transition duration-700 ease-in transform hover:scale-125 bg-indigo-600 text-white font-semibold py-3 px-6 rounded-md">
          Hover me
        </button>
        <button class="transition duration-700 ease-out transform hover:scale-125 bg-indigo-600 text-white font-semibold py-3 px-6 rounded-md">
          Hover me
        </button>
        <button class="transition duration-700 ease-in-out transform hover:scale-125 bg-indigo-600 text-white font-semibold py-3 px-6 rounded-md">
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
