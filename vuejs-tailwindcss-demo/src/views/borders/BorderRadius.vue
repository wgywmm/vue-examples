<template>
  <div class="component">
    <h1>Border Radius</h1>
    <hr class="my-4" />

    <h2>Rounded corners</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-light-blue-50 to-light-blue-100 p-10">
      <div class="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
        <div class="p-6 bg-light-blue-500 text-white text-center font-extrabold flex items-center justify-center rounded-sm">.rounded-sm</div>
        <div class="p-6 bg-light-blue-500 text-white text-center font-extrabold flex items-center justify-center rounded">.rounded</div>
        <div class="p-6 bg-light-blue-500 text-white text-center font-extrabold flex items-center justify-center rounded-md">.rounded-md</div>
        <div class="p-6 bg-light-blue-500 text-white text-center font-extrabold flex items-center justify-center rounded-lg">.rounded-lg</div>
      </div>
    </div>
    <hr class="my-4" />

    <h2>Pills and circles</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-indigo-50 to-indigo-100 p-10">
      <div class="flex justify-center items-center space-x-6">
        <div class="bg-indigo-500 px-6 py-3 text-white text-center font-extrabold rounded-full">Pill Shape</div>
        <div class="bg-indigo-500 h-24 w-24 text-white text-center font-extrabold flex items-center justify-center rounded-full">Circle</div>
      </div>
    </div>
    <hr class="my-4" />

    <h2>No rounding</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-rose-50 to-rose-100 p-10">
      <div class="flex justify-center items-center">
        <div class="bg-rose-500 p-6 text-white text-center font-extrabold rounded-none">.rounded-none</div>
      </div>
    </div>
    <hr class="my-4" />

    <h2>Rounding sides separately</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-emerald-50 to-teal-100 p-10">
      <div class="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
        <div class="bg-emerald-500 p-6 text-white text-center font-extrabold rounded-t-lg">.rounded-t-lg</div>
        <div class="bg-emerald-500 p-6 text-white text-center font-extrabold rounded-r-lg">.rounded-r-lg</div>
        <div class="bg-emerald-500 p-6 text-white text-center font-extrabold rounded-b-lg">.rounded-b-lg</div>
        <div class="bg-emerald-500 p-6 text-white text-center font-extrabold rounded-l-lg">.rounded-l-lg</div>
      </div>
    </div>
    <hr class="my-4" />

    <h2>Rounding corners separately</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-amber-50 to-amber-100 p-10">
      <div class="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
        <div class="bg-amber-500 p-6 text-white text-center font-extrabold rounded-tl-lg">.rounded-tl-lg</div>
        <div class="bg-amber-500 p-6 text-white text-center font-extrabold rounded-tr-lg">.rounded-tr-lg</div>
        <div class="bg-amber-500 p-6 text-white text-center font-extrabold rounded-br-lg">.rounded-br-lg</div>
        <div class="bg-amber-500 p-6 text-white text-center font-extrabold rounded-bl-lg">.rounded-bl-lg</div>
      </div>
    </div>
    <hr class="my-4" />
  </div>
</template>

<script>
export default {};
</script>
