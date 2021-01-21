<template>
  <div class="component">
    <h1>Background Clip</h1>
    <hr class="my-4" />

    <h2>Usage</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-indigo-50 to-indigo-100 p-10">
      <div class="grid grid-cols-1 gap-2 lg:grid-cols-3">
        <div class="bg-clip-border p-6 rounded-md bg-indigo-600 border-4 border-indigo-300 border-dashed font-extrabold text-white flex justify-center items-center">
          <span class="py-2">.bg-clip-border</span>
        </div>
        <div class="bg-clip-padding p-6 rounded-md bg-indigo-600 border-4 border-indigo-300 border-dashed font-extrabold text-white flex justify-center items-center">
          <span class="py-2">.bg-clip-padding</span>
        </div>
        <div class="bg-clip-content p-6 rounded-md bg-indigo-600 border-4 border-indigo-300 border-dashed font-extrabold text-white flex justify-center items-center">
          <span class="py-2">.bg-clip-content</span>
        </div>
      </div>
    </div>
    <hr class="my-4" />

    <h2>Cropping to text</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-emerald-50 to-teal-100 p-10">
      <div class="text-center text-5xl font-extrabold leading-none tracking-tight">
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          Hello world
        </span>
      </div>
    </div>
    <hr class="my-4" />

  </div>
</template>

<script>
export default {};
</script>
