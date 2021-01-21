<template>
  <div class="component">
    <h1>Gap</h1>
    <hr class="my-4" />
    <h2>Usage</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-indigo-50 to-indigo-100 p-6">
      <div>
        <div class="grid grid-cols-2 gap-4">
          <div class="h-16 rounded-md text-center bg-indigo-500"></div>
          <div class="h-16 rounded-md text-center bg-indigo-500"></div>
          <div class="h-16 rounded-md text-center bg-indigo-500"></div>
          <div class="h-16 rounded-md text-center bg-indigo-500"></div>
        </div>
      </div>
    </div>
    <hr class="my-4" />
    <h2>Changing row and column gaps independently</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-rose-50 to-rose-100 p-6">
      <div>
        <div class="grid grid-cols-3 gap-x-8 gap-y-4">
          <div class="h-16 rounded-md text-center bg-rose-500"></div>
          <div class="h-16 rounded-md text-center bg-rose-500"></div>
          <div class="h-16 rounded-md text-center bg-rose-500"></div>
          <div class="h-16 rounded-md text-center bg-rose-500"></div>
          <div class="h-16 rounded-md text-center bg-rose-500"></div>
          <div class="h-16 rounded-md text-center bg-rose-500"></div>
        </div>
      </div>
    </div>
    <hr class="my-4" />
  </div>
</template>

<script>
export default {};
</script>
