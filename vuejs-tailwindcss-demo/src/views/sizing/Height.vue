<template>
  <div class="component">
    <h1>Height</h1>
    <hr class="my-4" />

    <h2>Auto</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-amber-50 to-amber-100 p-10">
      <div class="h-auto w-40 mx-auto rounded-md bg-amber-500 text-white text-2xl font-extrabold flex items-center justify-center p-6">h-auto</div>
    </div>
    <hr class="my-4" />

    <h2>Screen height</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-rose-50 to-rose-100 p-10">
      <div class="h-screen mx-auto rounded-md bg-rose-500 text-white text-2xl font-extrabold flex items-center justify-center p-6">h-screen</div>
    </div>
    <hr class="my-4" />

    <h2>Fixed height</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-indigo-50 to-indigo-100 p-10">
      <div class="flex justify-around items-end space-between-3">
        <div>
          <div class="h-8 w-8 rounded-md bg-indigo-500 text-white text-2xl font-extrabold"></div>
          <p class="text-center mt-2 text-sm text-indigo-600">h-8</p>
        </div>
        <div>
          <div class="h-12 w-8 rounded-md bg-indigo-500 text-white text-2xl font-extrabold"></div>
          <p class="text-center mt-2 text-sm text-indigo-600">h-12</p>
        </div>
        <div>
          <div class="h-16 w-8 rounded-md bg-indigo-500 text-white text-2xl font-extrabold"></div>
          <p class="text-center mt-2 text-sm text-indigo-600">h-16</p>
        </div>
        <div>
          <div class="h-24 w-8 rounded-md bg-indigo-500 text-white text-2xl font-extrabold"></div>
          <p class="text-center mt-2 text-sm text-indigo-600">h-24</p>
        </div>
      </div>
    </div>
    <hr class="my-4" />

    <h2>Full height</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-gray-50 to-gray-100 flex justify-around items-end text-sm p-4">
      <div class="h-48">
        <div class="h-full w-40 rounded-md bg-indigo-500 text-white text-2xl font-extrabold flex items-center justify-center p-6">h-full</div>
      </div>
    </div>
    <hr class="my-4" />

  </div>
</template>

<script>
export default {};
</script>
