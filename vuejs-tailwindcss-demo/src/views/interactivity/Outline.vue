<template>
  <div class="component">
    <h1>Outline</h1>
    <hr class="my-4" />

    <h2>Remove outlines</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-amber-50 to-amber-100 p-10">
      <div class="flex space-x-6 justify-center">
        <input
          type="text"
          class="px-4 py-3 leading-5 border rounded-md"
          placeholder="Default focus style"
        >
        <input
          type="text"
          class="px-4 py-3 leading-5 border rounded-md focus:outline-none focus:ring focus:border-blue-400"
          placeholder="Custom focus style"
        >
      </div>
    </div>
    <hr class="my-4" />

    <h2>Dotted outlines</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-gray-50 to-gray-100 flex">
      <div class="min-w-0 flex-1 bg-gray-100 p-10 flex items-center justify-center">
        <button
          type="button"
          class="px-6 py-3 rounded-md font-semibold bg-blue-600 text-white focus:outline-black"
        >Button A</button>
      </div>
      <div class="min-w-0 flex-1 bg-blue-700 p-10 flex items-center justify-center">
        <button
          type="button"
          class="px-6 py-3 rounded-md font-semibold bg-white text-gray-900 focus:outline-white"
        >Button B</button>
      </div>
    </div>
    <hr class="my-4" />

  </div>
</template>

<script>
export default {};
</script>
