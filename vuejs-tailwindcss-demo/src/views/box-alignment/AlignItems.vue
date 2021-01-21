<template>
  <div class="component">
    <h1>Align Items</h1>
    <hr class="my-4" />

    <h2>Stretch</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-light-blue-50 to-light-blue-100 p-4">
      <div class="flex items-stretch p-4 space-x-4 bg-stripes bg-stripes-light-blue-500 rounded-lg">
        <div class="flex-1 py-4 rounded-md bg-light-blue-500 text-white text-2xl font-extrabold flex items-center justify-center">1</div>
        <div class="flex-1 py-12 rounded-md bg-light-blue-500 text-white text-2xl font-extrabold flex items-center justify-center">2</div>
        <div class="flex-1 py-8 rounded-md bg-light-blue-500 text-white text-2xl font-extrabold flex items-center justify-center">3</div>
      </div>
    </div>
    <hr class="my-4" />

    <h2>Start</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-fuchsia-50 to-fuchsia-100 p-4">
      <div class="flex items-start p-4 space-x-4 bg-stripes bg-stripes-fuchsia-500 rounded-lg">
        <div class="flex-1 py-2 rounded-md bg-fuchsia-500 text-white text-2xl font-extrabold flex items-center justify-center">1</div>
        <div class="flex-1 py-8 rounded-md bg-fuchsia-500 text-white text-2xl font-extrabold flex items-center justify-center">2</div>
        <div class="flex-1 py-5 rounded-md bg-fuchsia-500 text-white text-2xl font-extrabold flex items-center justify-center">3</div>
      </div>
    </div>
    <hr class="my-4" />

    <h2>Center</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-rose-50 to-rose-100 p-4">
      <div class="flex items-center p-4 space-x-4 bg-stripes bg-stripes-rose-500 rounded-lg">
        <div class="flex-1 py-2 rounded-md bg-rose-500 text-white text-2xl font-extrabold flex items-center justify-center m-2">1</div>
        <div class="flex-1 py-8 rounded-md bg-rose-500 text-white text-2xl font-extrabold flex items-center justify-center m-2">2</div>
        <div class="flex-1 py-5 rounded-md bg-rose-500 text-white text-2xl font-extrabold flex items-center justify-center m-2">3</div>
      </div>
    </div>
    <hr class="my-4" />

    <h2>End</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-purple-50 to-purple-100 p-4">
      <div class="flex items-end p-4 space-x-4 bg-stripes bg-stripes-purple-500 rounded-lg">
        <div class="flex-1 py-2 rounded-md bg-purple-500 text-white text-2xl font-extrabold flex items-center justify-center m-2">1</div>
        <div class="flex-1 py-8 rounded-md bg-purple-500 text-white text-2xl font-extrabold flex items-center justify-center m-2">2</div>
        <div class="flex-1 py-5 rounded-md bg-purple-500 text-white text-2xl font-extrabold flex items-center justify-center m-2">3</div>
      </div>
    </div>
    <hr class="my-4" />

    <h2>Baseline</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-emerald-50 to-teal-100 p-4">
      <div class="flex items-baseline p-4 space-x-4 bg-stripes bg-stripes-emerald-500 rounded-lg">
        <div class="flex-1 pt-4 pb-6 rounded-md bg-emerald-500 text-white text-2xl font-extrabold flex items-center justify-center m-2">1</div>
        <div class="flex-1 pt-6 pb-10 rounded-md bg-emerald-500 text-white text-2xl font-extrabold flex items-center justify-center m-2">2</div>
        <div class="flex-1 pt-8 pb-4 rounded-md bg-emerald-500 text-white text-2xl font-extrabold flex items-center justify-center m-2">3</div>
      </div>
    </div>
    <hr class="my-4" />

  </div>
</template>

<script>
export default {};
</script>
