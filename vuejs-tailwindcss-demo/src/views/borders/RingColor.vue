<template>
  <div class="component">
    <h1>Ring Color</h1>
    <hr class="my-4" />

    <h2>Usage</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-indigo-50 to-indigo-100 flex justify-center p-8">
      <button
        tabindex="-1"
        class="focus:outline-none w-32 py-2 rounded-md font-semibold text-white bg-indigo-500 ring-4 ring-indigo-300"
      >
        Button
      </button>
    </div>
    <hr class="my-4" />

    <h2>Changing opacity</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-amber-50 to-amber-100 flex justify-center p-8">
      <button
        tabindex="-1"
        class="focus:outline-none w-32 py-2 rounded-md font-semibold text-white bg-amber-500 ring-4 ring-amber-500 ring-opacity-50"
      >
        Button
      </button>
    </div>
    <hr class="my-4" />

  </div>
</template>

<script>
export default {};
</script>
