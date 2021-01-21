<template>
  <div class="component">
    <h1>Background Color</h1>
    <hr class="my-4" />

    <h2>Usage</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-emerald-50 to-teal-100 p-10">
      <div class="text-center">
        <button
          type="button"
          class="py-2 px-4 bg-emerald-500 text-white font-semibold rounded-lg shadow-md focus:outline-none"
          tabindex="-1"
        >
          Click me
        </button>
      </div>
    </div>
    <hr class="my-4" />

    <h2>Changing opacity</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-purple-50 to-purple-100 p-10">
      <div class="grid grid-cols-2 gap-2 sm:grid-cols-5">
        <div class="h-16 rounded-md bg-opacity-100 bg-purple-600 font-extrabold text-white flex justify-center items-center">100%</div>
        <div class="h-16 rounded-md bg-opacity-75 bg-purple-600 font-extrabold text-white flex justify-center items-center">75%</div>
        <div class="h-16 rounded-md bg-opacity-50 bg-purple-600 font-extrabold text-white flex justify-center items-center">50%</div>
        <div class="h-16 rounded-md bg-opacity-25 bg-purple-600 font-extrabold text-white flex justify-center items-center">25%</div>
        <div class="h-16 rounded-md bg-opacity-0 bg-purple-600 font-extrabold text-white flex justify-center items-center">0%</div>
      </div>
    </div>
    <hr class="my-4" />

    <h2>Hover</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-rose-50 to-rose-100 p-10">
      <div class="text-center">
        <button
          type="button"
          class="py-2 px-4 bg-rose-500 text-white font-semibold rounded-lg shadow-md hover:bg-rose-700 focus:outline-none"
          tabindex="-1"
        >
          Click me
        </button>
      </div>
    </div>
    <hr class="my-4" />

    <h2>Focus</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-amber-50 to-amber-100 p-10">
      <div class="max-w-xs w-full mx-auto">
        <input
          class="border border-gray-400 bg-gray-200 focus:bg-white text-gray-900 appearance-none inline-block w-full border rounded py-3 px-4 focus:outline-none"
          placeholder="Focus me"
        >
      </div>
    </div>
    <hr class="my-4" />
  </div>
</template>

<script>
export default {};
</script>
