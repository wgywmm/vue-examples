<template>
  <div class="component">
    <h1>Border Width</h1>
    <hr class="my-4" />

    <h2>All sides</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-indigo-50 to-indigo-100 p-10">
      <div class="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
        <div class="p-4 bg-indigo-300 text-white text-center font-extrabold flex items-center justify-center border-0 border-indigo-600">
          .border-0
        </div>
        <div class="p-4 bg-indigo-300 text-white text-center font-extrabold flex items-center justify-center border border-indigo-600">
          .border
        </div>
        <div class="p-4 bg-indigo-300 text-white text-center font-extrabold flex items-center justify-center border-2 border-indigo-600">
          .border-2
        </div>
        <div class="p-4 bg-indigo-300 text-white text-center font-extrabold flex items-center justify-center border-4 border-indigo-600">
          .border-4
        </div>
        <div class="p-4 bg-indigo-300 text-white text-center font-extrabold flex items-center justify-center border-8 border-indigo-600">
          .border-8
        </div>
      </div>
    </div>
    <hr class="my-4" />

    <h2>Individual sides</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-fuchsia-50 to-fuchsia-100 p-10">
      <div class="grid grid-cols-2 gap-2 lg:grid-cols-4">
        <div class="p-4 bg-fuchsia-300 text-white text-center font-extrabold flex items-center justify-center border-t-2 border-fuchsia-600">
          .border-t-2
        </div>
        <div class="p-4 bg-fuchsia-300 text-white text-center font-extrabold flex items-center justify-center border-r-2 border-fuchsia-600">
          .border-r-2
        </div>
        <div class="p-4 bg-fuchsia-300 text-white text-center font-extrabold flex items-center justify-center border-b-2 border-fuchsia-600">
          .border-b-2
        </div>
        <div class="p-4 bg-fuchsia-300 text-white text-center font-extrabold flex items-center justify-center border-l-2 border-fuchsia-600">
          .border-l-2
        </div>
      </div>
    </div>
    <hr class="my-4" />

    <h2>Between elements</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-light-blue-50 to-light-blue-100 p-10">
      <div class="divide-y divide-light-blue-400">
        <div class="p-4 text-light-blue-800 text-center font-extrabold">1</div>
        <div class="p-4 text-light-blue-800 text-center font-extrabold">2</div>
        <div class="p-4 text-light-blue-800 text-center font-extrabold">3</div>
      </div>
    </div>
    <hr class="my-4" />

  </div>
</template>

<script>
export default {};
</script>
