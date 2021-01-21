<template>
  <div class="component">
    <h1>Grid Column Start / End</h1>
    <hr />
    <h2>Spanning columns</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-purple-50 to-purple-100 bg-white p-8">
      <div class="grid grid-cols-3 gap-4">
        <div class="bg-purple-300 h-12 rounded-md flex justify-center items-center text-white text-2xl font-extrabold">1</div>
        <div class="bg-purple-300 h-12 rounded-md flex justify-center items-center text-white text-2xl font-extrabold">2</div>
        <div class="bg-purple-300 h-12 rounded-md flex justify-center items-center text-white text-2xl font-extrabold">3</div>
        <div class="col-span-2 bg-purple-500 h-12 rounded-md flex justify-center items-center text-white text-2xl font-extrabold">4</div>
        <div class=" bg-purple-300 h-12 rounded-md flex justify-center items-center text-white text-2xl font-extrabold">5</div>
        <div class=" bg-purple-300 h-12 rounded-md flex justify-center items-center text-white text-2xl font-extrabold">6</div>
        <div class="col-span-2 bg-purple-500 h-12 rounded-md flex justify-center items-center text-white text-2xl font-extrabold">7</div>
      </div>
    </div>
    <hr />
    <h2>Starting and ending lines</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-light-blue-50 to-light-blue-100 bg-white p-8">
      <div class="grid grid-cols-6 gap-4">
        <div class="bg-stripes bg-stripes-light-blue-500 bg-light-blue-300 bg-opacity-25 h-12 rounded-md flex items-center justify-center text-white text-2xl font-extrabold"></div>
        <div class="col-start-2 col-span-4 bg-light-blue-500 h-12 rounded-md flex items-center justify-center text-white text-2xl font-extrabold">1</div>
        <div class="bg-stripes bg-stripes-light-blue-500 bg-light-blue-300 bg-opacity-25 h-12 rounded-md flex items-center justify-center text-white text-2xl font-extrabold"></div>
        <div class="col-start-1 col-end-3 bg-light-blue-500 h-12 rounded-md flex items-center justify-center text-white text-2xl font-extrabold">2</div>
        <div class="bg-stripes bg-stripes-light-blue-500 bg-light-blue-300 bg-opacity-25 h-12 rounded-md flex items-center justify-center text-white text-2xl font-extrabold"></div>
        <div class="bg-stripes bg-stripes-light-blue-500 bg-light-blue-300 bg-opacity-25 h-12 rounded-md flex items-center justify-center text-white text-2xl font-extrabold"></div>
        <div class="col-end-7 col-span-2 bg-light-blue-500 h-12 rounded-md flex items-center justify-center text-white text-2xl font-extrabold">3</div>
        <div class="col-start-1 col-end-7 bg-light-blue-500 h-12 rounded-md flex items-center justify-center text-white text-2xl font-extrabold">4</div>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
export default {};
</script>
