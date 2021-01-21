<template>
  <div class="component">
    <h1>Border Style</h1>
    <hr class="my-4" />

    <h2>Usage</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-indigo-50 to-indigo-100 p-10">
      <div class="grid grid-cols-2 gap-2 lg:grid-cols-3">
        <div class="border-solid h-16 flex-1 rounded-md border-4 border-indigo-500 border-opacity-100 font-extrabold text-indigo-600 flex justify-center items-center">
          .border-solid
        </div>
        <div class="border-dashed h-16 flex-1 rounded-md border-4 border-indigo-500 border-opacity-100 font-extrabold text-indigo-600 flex justify-center items-center">
          .border-dashed
        </div>
        <div class="border-dotted h-16 flex-1 rounded-md border-4 border-indigo-500 border-opacity-100 font-extrabold text-indigo-600 flex justify-center items-center">
          .border-dotted
        </div>
        <div class="border-double h-16 flex-1 rounded-md border-4 border-indigo-500 border-opacity-100 font-extrabold text-indigo-600 flex justify-center items-center">
          .border-double
        </div>
        <div class="border-none h-16 flex-1 rounded-md border-4 border-indigo-500 border-opacity-100 font-extrabold text-indigo-600 flex justify-center items-center">
          .border-none
        </div>
      </div>
    </div>
    <hr class="my-4" />

  </div>
</template>

<script>
export default {};
</script>
