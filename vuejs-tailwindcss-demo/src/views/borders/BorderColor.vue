<template>
  <div class="component">
    <h1>Border Color</h1>
    <hr class="my-4" />

    <h2>Usage</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-rose-50 to-rose-100 p-10">
      <div class="max-w-xs w-full mx-auto">
        <input
          class="border border-red-500 bg-white text-gray-900 appearance-none block w-full rounded-md py-3 px-4 focus:outline-none"
          placeholder="Your email"
        >
      </div>
    </div>
    <hr class="my-4" />

    <h2>Changing opacity</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-light-blue-50 to-light-blue-100 p-10">
      <div class="grid grid-cols-2 gap-2 sm:grid-cols-5">
        <div class="h-16 flex-1 rounded border-4 border-light-blue-500 border-opacity-100 font-extrabold text-light-blue-600 flex justify-center items-center">100%</div>
        <div class="h-16 flex-1 rounded border-4 border-light-blue-500 border-opacity-75 font-extrabold text-light-blue-600 flex justify-center items-center">75%</div>
        <div class="h-16 flex-1 rounded border-4 border-light-blue-500 border-opacity-50 font-extrabold text-light-blue-600 flex justify-center items-center">50%</div>
        <div class="h-16 flex-1 rounded border-4 border-light-blue-500 border-opacity-25 font-extrabold text-light-blue-600 flex justify-center items-center">25%</div>
        <div class="h-16 flex-1 rounded border-4 border-light-blue-500 border-opacity-0 font-extrabold text-light-blue-600 flex justify-center items-center">0%</div>
      </div>
    </div>
    <hr class="my-4" />

    <h2>Hover</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-purple-50 to-purple-100 p-10">
      <div class="flex items-center justify-center">
        <button class="border-2 border-purple-500 hover:border-gray-500 bg-transparent text-purple-700 hover:text-gray-700 py-3 px-4 font-semibold rounded-md">
          Button
        </button>
      </div>
    </div>
    <hr class="my-4" />

    <h2>Focus</h2>
    <div class="rounded-t-xl overflow-hidden p-10">
      <div class="max-w-xs w-full mx-auto">
        <input
          class="border border-gray-300 bg-white text-gray-900 appearance-none block w-full rounded-md py-3 px-4 focus:border-blue-500 focus:outline-none"
          placeholder="Your email"
        >
      </div>
    </div>
    <hr class="my-4" />

  </div>
</template>

<script>
export default {};
</script>
