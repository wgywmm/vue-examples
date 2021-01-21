<template>
  <div class="component">
    <h1>Divide Width</h1>
    <hr class="my-4" />

    <h2>Usage</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-fuchsia-50 to-fuchsia-100 p-10">
      <div class="divide-y divide-fuchsia-300">
        <div class="text-center font-extrabold text-2xl text-fuchsia-600 py-3">1</div>
        <div class="text-center font-extrabold text-2xl text-fuchsia-600 py-3">2</div>
        <div class="text-center font-extrabold text-2xl text-fuchsia-600 py-3">3</div>
      </div>
    </div>
    <hr class="my-4" />

    <h2>Changing opacity</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-light-blue-50 to-light-blue-100 p-10">
      <div class="divide-y-4 divide-black divide-opacity-25">
        <div class="text-center font-extrabold text-2xl text-light-blue-600 py-3">1</div>
        <div class="text-center font-extrabold text-2xl text-light-blue-600 py-3">2</div>
        <div class="text-center font-extrabold text-2xl text-light-blue-600 py-3">3</div>
      </div>
    </div>
    <hr class="my-4" />

  </div>
</template>

<script>
export default {};
</script>
