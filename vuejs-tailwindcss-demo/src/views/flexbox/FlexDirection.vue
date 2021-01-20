<template>
  <div class="component">
    <h1>Flex Direction</h1>
    <hr />
    <h2>Row</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-amber-50 to-amber-100 p-4">
      <div class="flex flex-row space-x-4">
        <div class="w-16 h-16 rounded-md bg-amber-500 text-white flex items-center justify-center text-2xl font-extrabold">
          1
        </div>
        <div class="w-16 h-16 rounded-md bg-amber-500 text-white flex items-center justify-center text-2xl font-extrabold">
          2
        </div>
        <div class="w-16 h-16 rounded-md bg-amber-500 text-white flex items-center justify-center text-2xl font-extrabold">
          3
        </div>
      </div>
    </div>
    <hr />
    <h2>Row reversed</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-light-blue-50 to-light-blue-100 p-4">
      <div class="flex flex-row-reverse space-x-reverse space-x-4">
        <div class="w-16 h-16 rounded-md bg-light-blue-500 text-white flex items-center justify-center text-2xl font-extrabold">
          1
        </div>
        <div class="w-16 h-16 rounded-md bg-light-blue-500 text-white flex items-center justify-center text-2xl font-extrabold">
          2
        </div>
        <div class="w-16 h-16 rounded-md bg-light-blue-500 text-white flex items-center justify-center text-2xl font-extrabold">
          3
        </div>
      </div>
    </div>
    <hr />
    <h2>Column</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-emerald-50 to-teal-100 p-4">
      <div class="flex flex-col space-y-4">
        <div class="h-16 rounded-md bg-emerald-500 text-white flex items-center justify-center text-2xl font-extrabold">
          1
        </div>
        <div class="h-16 rounded-md bg-emerald-500 text-white flex items-center justify-center text-2xl font-extrabold">
          2
        </div>
        <div class="h-16 rounded-md bg-emerald-500 text-white flex items-center justify-center text-2xl font-extrabold">
          3
        </div>
      </div>
    </div>
    <hr>
    <h2>Column reversed</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-rose-50 to-rose-100 p-4">
      <div class="flex flex-col-reverse space-y-reverse space-y-4">
        <div class="h-16 rounded-md bg-rose-500 text-white flex items-center justify-center text-2xl font-extrabold">1</div>
        <div class="h-16 rounded-md bg-rose-500 text-white flex items-center justify-center text-2xl font-extrabold">2</div>
        <div class="h-16 rounded-md bg-rose-500 text-white flex items-center justify-center text-2xl font-extrabold">3</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
