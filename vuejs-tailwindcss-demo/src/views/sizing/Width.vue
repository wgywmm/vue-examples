<template>
  <div class="component">
    <h1>Width</h1>
    <hr class="my-4" />

    <h2>Auto</h2>
    <div class="w-24 md:w-auto ..."></div>
    <hr class="my-4" />

    <h2>Screen Width</h2>
    <div class="h-12 w-screen"></div>
    <hr class="my-4" />

    <h2>Fixed Width</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-light-blue-50 to-light-blue-100 p-10">
      <div class="flex flex-col space-y-8 mx-auto w-64">
        <div class="flex items-center space-x-4">
          <p class="text-sm text-light-blue-600 w-12 text-right">w-8</p>
          <div class="h-8 w-8 rounded-md bg-light-blue-500 text-white text-2xl font-extrabold"></div>
        </div>
        <div class="flex items-center space-x-4">
          <p class="text-sm text-light-blue-600 w-12 text-right">w-12</p>
          <div class="h-8 w-12 rounded-md bg-light-blue-500 text-white text-2xl font-extrabold"></div>
        </div>
        <div class="flex items-center space-x-4">
          <p class="text-sm text-light-blue-600 w-12 text-right">w-16</p>
          <div class="h-8 w-16 rounded-md bg-light-blue-500 text-white text-2xl font-extrabold"></div>
        </div>
        <div class="flex items-center space-x-4">
          <p class="text-sm text-light-blue-600 w-12 text-right">w-24</p>
          <div class="h-8 w-24 rounded-md bg-light-blue-500 text-white text-2xl font-extrabold"></div>
        </div>
      </div>
    </div>
    <hr class="my-4" />

    <h2>Fluid Width</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-rose-50 to-rose-100 p-10">
      <div class="space-y-6">
        <div class="flex rounded-md overflow-hidden text-white font-mono">
          <div class="w-1/2 px-2 py-4 bg-rose-400 text-center">w-1/2</div>
          <div class="w-1/2 px-2 py-4 bg-rose-500 text-center">w-1/2</div>
        </div>
        <div class="flex rounded-md overflow-hidden text-white font-mono">
          <div class="w-2/5 px-2 py-4 bg-rose-400 text-center">w-2/5</div>
          <div class="w-3/5 px-2 py-4 bg-rose-500 text-center">w-3/5</div>
        </div>
        <div class="flex rounded-md overflow-hidden text-white font-mono">
          <div class="w-1/3 px-2 py-4 bg-rose-400 text-center">w-1/3</div>
          <div class="w-2/3 px-2 py-4 bg-rose-500 text-center">w-2/3</div>
        </div>
        <div class="flex rounded-md overflow-hidden text-white font-mono">
          <div class="w-1/4 px-2 py-4 bg-rose-400 text-center">w-1/4</div>
          <div class="w-3/4 px-2 py-4 bg-rose-500 text-center">w-3/4</div>
        </div>
        <div class="flex rounded-md overflow-hidden text-white font-mono">
          <div class="w-1/5 px-2 py-4 bg-rose-400 text-center">w-1/5</div>
          <div class="w-4/5 px-2 py-4 bg-rose-500 text-center">w-4/5</div>
        </div>
        <div class="flex rounded-md overflow-hidden text-white font-mono">
          <div class="w-1/6 px-2 py-4 bg-rose-400 text-center">w-1/6</div>
          <div class="w-5/6 px-2 py-4 bg-rose-500 text-center">w-5/6</div>
        </div>
        <div class="rounded-md w-full px-2 py-4 bg-rose-500 text-center text-white font-mono">w-full</div>
      </div>
    </div>
    <hr class="my-4" />

  </div>
</template>

<script>
export default {};
</script>
