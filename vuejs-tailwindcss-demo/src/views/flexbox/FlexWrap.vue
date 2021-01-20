<template>
  <div class="component">
    <h1>Flex Wrap</h1>
    <hr />
    <h2>Don't wrap</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-emerald-50 to-teal-100 p-10">
      <div class="flex flex-nowrap space-x-4">
        <div class="h-12 w-2/5 rounded-md text-white flex-none bg-emerald-500 flex items-center justify-center text-2xl font-semibold ">1</div>
        <div class="h-12 w-2/5 rounded-md text-white flex-none bg-emerald-500 flex items-center justify-center text-2xl font-semibold ">2</div>
        <div class="h-12 w-2/5 rounded-md text-white flex-none bg-emerald-500 flex items-center justify-center text-2xl font-semibold ">3</div>
      </div>
    </div>
    <hr />
    <h2>Wrap normally</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-light-blue-50 to-light-blue-100 p-10">
      <div class="flex flex-wrap -m-2">
        <div class="h-12 m-2 w-2/5 rounded-md text-white bg-light-blue-500 flex items-center justify-center text-2xl font-semibold ">1</div>
        <div class="h-12 m-2 w-2/5 rounded-md text-white bg-light-blue-500 flex items-center justify-center text-2xl font-semibold ">2</div>
        <div class="h-12 m-2 w-2/5 rounded-md text-white bg-light-blue-500 flex items-center justify-center text-2xl font-semibold ">3</div>
      </div>
    </div>
    <hr>
    <h2>Wrap reversed</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-purple-50 to-purple-100 p-10">
      <div class="flex flex-wrap-reverse -m-2">
        <div class="h-12 m-2 w-2/5 rounded-md text-white bg-purple-500 flex items-center justify-center text-2xl font-semibold ">1</div>
        <div class="h-12 m-2 w-2/5 rounded-md text-white bg-purple-500 flex items-center justify-center text-2xl font-semibold ">2</div>
        <div class="h-12 m-2 w-2/5 rounded-md text-white bg-purple-500 flex items-center justify-center text-2xl font-semibold ">3</div>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
export default {};
</script>
