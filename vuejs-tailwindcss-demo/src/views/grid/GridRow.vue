<template>
  <div class="component">
    <h1>Grid Row Start / End</h1>
    <hr />
    <h2>Spanning rows</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-fuchsia-50 to-fuchsia-100 p-10">
      <div class="h-64 grid grid-rows-3 grid-flow-col gap-4">
        <div class="row-span-3 bg-fuchsia-500 rounded-md flex justify-center items-center text-white text-2xl font-extrabold">1</div>
        <div class="col-span-2 bg-fuchsia-300 rounded-md flex justify-center items-center text-white text-2xl font-extrabold">2</div>
        <div class="row-span-2 col-span-2 bg-fuchsia-500 rounded-md flex justify-center items-center text-white text-2xl font-extrabold">3</div>
      </div>
    </div>
    <hr />
    <h2>Starting and ending lines</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-light-blue-50 to-light-blue-100 p-10">
      <div class="h-64 grid grid-rows-3 grid-flow-col gap-4">
        <div class="row-start-2 row-span-2 bg-light-blue-500 rounded-md flex justify-center items-center text-white text-2xl font-extrabold">1</div>
        <div class="row-end-3 row-span-2 bg-light-blue-500 rounded-md flex justify-center items-center text-white text-2xl font-extrabold">2</div>
        <div class="row-start-1 row-end-4 bg-light-blue-500 rounded-md flex justify-center items-center text-white text-2xl font-extrabold">3</div>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
export default {};
</script>
