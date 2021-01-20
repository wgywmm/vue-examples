<template>
  <div class="component">
    <h1>Container</h1>
    <hr />
    <h2>Z-Index</h2>
    <div
      class="rounded-t-xl overflow-hidden bg-gradient-to-r from-fuchsia-50 to-fuchsia-100 p-4"
    >
      <div
        class="flex justify-center relative h-28 text-center transform translate-x-12"
      >
        <div
          class="z-40 relative w-20 h-20 bg-fuchsia-500 border-r border-opacity-50 border-fuchsia-600 rounded-md shadow-md flex justify-center items-center text-white text-2xl font-extrabold"
        >
          5
        </div>
        <div
          class="z-30 relative w-20 h-20 -left-6 top-2 bg-fuchsia-500 border-r border-opacity-50 border-fuchsia-600 rounded-md shadow-md flex justify-center items-center text-white text-2xl font-extrabold"
        >
          4
        </div>
        <div
          class="z-20 relative w-20 h-20 -left-12 top-4 bg-fuchsia-500 border-r border-opacity-50 border-fuchsia-600 rounded-md shadow-md flex justify-center items-center text-white text-2xl font-extrabold"
        >
          3
        </div>
        <div
          class="z-10 relative w-20 h-20 -left-18 top-6 bg-fuchsia-500 border-r border-opacity-50 border-fuchsia-600 rounded-md shadow-md flex justify-center items-center text-white text-2xl font-extrabold"
        >
          2
        </div>
        <div
          class="z-0 relative w-20 h-20 -left-24 top-8 bg-fuchsia-500 rounded-md shadow-md flex justify-center items-center text-white text-2xl font-extrabold"
        >
          1
        </div>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
export default {};
</script>
