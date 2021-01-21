<template>
  <div class="component">
    <h1>Margin</h1>
    <hr class="my-4" />
    <h2>Add margin to a single side</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-rose-50 to-rose-100 p-10">
      <div class="flex flex-wrap justify-around items-center text-white font-mono">

        <div class="bg-stripes bg-stripes-rose-500 overflow-hidden m-2 sm:m-0">
          <div class="mt-8 bg-rose-500 flex rounded-md items-center justify-center py-3 px-4">mt-8</div>
        </div>

        <div class="bg-stripes bg-stripes-rose-500 overflow-hidden m-2 sm:m-0">
          <div class="mr-8 bg-rose-500 flex rounded-md items-center justify-center py-3 px-4">mr-8</div>
        </div>

        <div class="bg-stripes bg-stripes-rose-500 overflow-hidden m-2 sm:m-0">
          <div class="mb-8 bg-rose-500 flex rounded-md items-center justify-center py-3 px-4">mb-8</div>
        </div>

        <div class="bg-stripes bg-stripes-rose-500 overflow-hidden m-2 sm:m-0">
          <div class="ml-8 bg-rose-500 flex rounded-md items-center justify-center py-3 px-4">ml-8</div>
        </div>
      </div>
    </div>
    <hr class="my-4" />

    <h2>Add horizontal margin</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-purple-50 to-purple-100 p-10">
      <div class="flex justify-around items-center text-white font-mono">
        <div class="bg-stripes bg-stripes-purple-500">
          <div class="mx-8 bg-purple-500 rounded-md flex items-center justify-center py-3 px-4">mx-8</div>
        </div>
      </div>
    </div>
    <hr class="my-4" />

    <h2>Add vertical margin</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-emerald-50 to-teal-100 p-10">
      <div class="flex justify-around items-center text-white font-mono">
        <div class="bg-stripes bg-stripes-emerald-500">
          <div class="my-8 bg-emerald-500 rounded-md flex items-center justify-center py-3 px-4">my-8</div>
        </div>
      </div>
    </div>
    <hr class="my-4" />

    <h2>Add margin to all sides</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-light-blue-50 to-light-blue-100 p-10">
      <div class="flex justify-around items-center text-white font-mono">
        <div class="bg-stripes bg-stripes-light-blue-500">
          <div class="m-8 bg-light-blue-500 rounded-md flex items-center justify-center py-3 px-4">m-8</div>
        </div>
      </div>
    </div>
    <hr class="my-4" />

    <h2>Negative margins</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-fuchsia-50 to-fuchsia-100 p-10">
      <div class="flex justify-around items-center text-white font-mono">
        <div class="flex flex-col items-center">
          <div class="relative w-32 h-16 bg-fuchsia-300 rounded-md overflow-hidden">
            <div class="absolute bottom-0 w-full h-8 bg-stripes bg-stripes-red-900"></div>
          </div>
          <div class="relative -mt-8 bg-fuchsia-500 rounded-md flex items-center justify-center py-3 px-4">-mt-8</div>
        </div>
      </div>
    </div>
    <hr class="my-4" />

  </div>
</template>

<script>
export default {};
</script>
