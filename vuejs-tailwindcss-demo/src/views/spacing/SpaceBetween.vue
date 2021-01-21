<template>
  <div class="component">
    <h1>Space Between</h1>
    <hr class="my-4" />

    <h2>Add horizontal space between children</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-fuchsia-50 to-fuchsia-100 p-10">
      <div class="flex justify-start">
        <div class="w-16 h-16 text-white text-2xl font-extrabold rounded-md flex items-center justify-center bg-fuchsia-500">1</div>
        <div class="w-4 h-16 rounded-md bg-fuchsia-300 bg-stripes bg-stripes-white"></div>
        <div class="w-16 h-16 text-white text-2xl font-extrabold rounded-md flex items-center justify-center bg-fuchsia-500">2</div>
        <div class="w-4 h-16 rounded-md bg-fuchsia-300 bg-stripes bg-stripes-white"></div>
        <div class="w-16 h-16 text-white text-2xl font-extrabold rounded-md flex items-center justify-center bg-fuchsia-500">3</div>
      </div>
    </div>
    <hr class="my-4" />

    <h2>Add vertical space between children</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-light-blue-50 to-light-blue-100 p-10">
      <div>
        <div class="h-16 text-white text-2xl font-extrabold rounded-md flex items-center justify-center bg-blue-500">1</div>
        <div class="h-6 rounded-md bg-blue-300 bg-stripes bg-stripes-white"></div>
        <div class="h-16 text-white text-2xl font-extrabold rounded-md flex items-center justify-center bg-blue-500">2</div>
        <div class="h-6 rounded-md bg-blue-300 bg-stripes bg-stripes-white"></div>
        <div class="h-16 text-white text-2xl font-extrabold rounded-md flex items-center justify-center bg-blue-500">3</div>
      </div>
    </div>
    <hr class="my-4" />

    <h2>Reversing children order</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-gray-50 to-gray-100 p-10">
      <div class="flex flex-row-reverse justify-start">
        <div class="w-16 h-16 text-white text-2xl font-extrabold rounded-md flex items-center justify-center bg-fuchsia-500">1</div>
        <div class="w-4 h-16 rounded-md bg-fuchsia-300 bg-stripes bg-stripes-white"></div>
        <div class="w-16 h-16 text-white text-2xl font-extrabold rounded-md flex items-center justify-center bg-fuchsia-500">2</div>
        <div class="w-4 h-16 rounded-md bg-fuchsia-300 bg-stripes bg-stripes-white"></div>
        <div class="w-16 h-16 text-white text-2xl font-extrabold rounded-md flex items-center justify-center bg-fuchsia-500">3</div>
      </div>
    </div>
    <hr class="my-4" />

  </div>
</template>

<script>
export default {};
</script>
