<template>
  <div class="component">
    <h1>Box Shadow</h1>
    <hr class="my-4" />

    <h2>Outer shadow</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-indigo-50 to-indigo-100 p-10">
      <div class="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
        <div class="shadow-sm h-32 w-32 font-medium bg-white rounded-md flex items-center justify-center">.shadow-sm</div>
        <div class="shadow h-32 w-32 font-medium bg-white rounded-md flex items-center justify-center">.shadow</div>
        <div class="shadow-md h-32 w-32 font-medium bg-white rounded-md flex items-center justify-center">.shadow-md</div>
        <div class="shadow-lg h-32 w-32 font-medium bg-white rounded-md flex items-center justify-center">.shadow-lg</div>
        <div class="shadow-xl h-32 w-32 font-medium bg-white rounded-md flex items-center justify-center">.shadow-xl</div>
        <div class="shadow-2xl h-32 w-32 font-medium bg-white rounded-md flex items-center justify-center">.shadow-2xl</div>
      </div>
    </div>
    <hr class="my-4" />

    <h2>Inner shadow</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-purple-50 to-purple-100 p-10">
      <div class="flex justify-center items-center">
        <div class="shadow-inner h-24 w-40 font-medium bg-purple-200  text-purple-500 rounded-md flex items-center justify-center">.shadow-inner</div>
      </div>
    </div>
    <hr class="my-4" />

    <h2>No shadow</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-rose-50 to-rose-100 p-10">
      <div class="flex justify-center items-center">
        <div class="shadow-none h-24 w-40 font-medium bg-rose-200 text-rose-500 rounded-md flex items-center justify-center">.shadow-none</div>
      </div>
    </div>
    <hr class="my-4" />

  </div>
</template>

<script>
export default {};
</script>
