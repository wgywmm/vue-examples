<template>
  <div class="component">
    <h1>Align Self</h1>
    <hr class="my-4" />

    <h2>Auto</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-emerald-50 to-teal-100 p-6">
      <div class="flex items-stretch h-24 space-x-2">
        <div class="flex-1 rounded-md bg-emerald-300 text-white text-2xl font-extrabold flex items-center justify-center">1</div>
        <div class="self-auto flex-1 rounded-md bg-emerald-500 text-white text-2xl font-extrabold flex items-center justify-center">2</div>
        <div class="flex-1 rounded-md bg-emerald-300 text-white text-2xl font-extrabold flex items-center justify-center">3</div>
      </div>
    </div>
    <hr class="my-4" />

    <h2>Start</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-amber-50 to-amber-100 p-6">
      <div class="flex items-stretch h-24 space-x-2">
        <div class="flex-1 rounded-md bg-amber-300 text-white text-2xl font-extrabold flex items-center justify-center">1</div>
        <div class="self-start flex-1 rounded-md bg-amber-500 text-white text-2xl font-extrabold flex items-center justify-center py-3">2</div>
        <div class="flex-1 rounded-md bg-amber-300 text-white text-2xl font-extrabold flex items-center justify-center">3</div>
      </div>
    </div>
    <hr class="my-4" />

    <h2>Center</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-purple-50 to-purple-100 p-6">
      <div class="flex items-stretch h-24 space-x-2">
        <div class="flex-1 rounded-md bg-purple-300 text-white text-2xl font-extrabold flex items-center justify-center">1</div>
        <div class="self-center flex-1 rounded-md bg-purple-500 text-white text-2xl font-extrabold flex items-center justify-center py-3">2</div>
        <div class="flex-1 rounded-md bg-purple-300 text-white text-2xl font-extrabold flex items-center justify-center">3</div>
      </div>
    </div>
    <hr class="my-4" />

    <h2>End</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-rose-50 to-rose-100 p-6">
      <div class="flex items-stretch h-24 space-x-2">
        <div class="flex-1 rounded-md bg-rose-300 text-white text-2xl font-extrabold flex items-center justify-center">1</div>
        <div class="self-end flex-1 rounded-md bg-rose-500 text-white text-2xl font-extrabold flex items-center justify-center py-3">2</div>
        <div class="flex-1 rounded-md bg-rose-300 text-white text-2xl font-extrabold flex items-center justify-center">3</div>
      </div>
    </div>
    <hr class="my-4" />

    <h2>Stretch</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-fuchsia-50 to-fuchsia-100 p-6">
      <div class="flex items-stretch h-24 space-x-2">
        <div class="flex-1 rounded-md bg-fuchsia-300 text-white text-2xl font-extrabold flex items-center justify-center">1</div>
        <div class="self-stretch flex-1 rounded-md bg-fuchsia-500 text-white text-2xl font-extrabold flex items-center justify-center py-3">2</div>
        <div class="flex-1 rounded-md bg-fuchsia-300 text-white text-2xl font-extrabold flex items-center justify-center">3</div>
      </div>
    </div>
    <hr class="my-4" />

  </div>
</template>

<script>
export default {};
</script>
