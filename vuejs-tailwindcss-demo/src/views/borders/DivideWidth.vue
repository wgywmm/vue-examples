<template>
  <div class="component">
    <h1>Divide Width</h1>
    <hr class="my-4" />

    <h2>Add borders between horizontal children</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-emerald-50 to-teal-100 p-10">
      <div class="grid grid-cols-3 divide-x divide-emerald-500">
        <div class="text-center font-extrabold text-2xl text-emerald-600 px-6">1</div>
        <div class="text-center font-extrabold text-2xl text-emerald-600 px-6">2</div>
        <div class="text-center font-extrabold text-2xl text-emerald-600 px-6">3</div>
      </div>
    </div>
    <hr class="my-4" />

    <h2>Add borders between stacked children</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-amber-50 to-amber-100 p-10">
      <div class="grid grid-cols-1 divide-y divide-amber-500">
        <div class="text-center font-extrabold text-2xl text-amber-600 py-3">1</div>
        <div class="text-center font-extrabold text-2xl text-amber-600 py-3">2</div>
        <div class="text-center font-extrabold text-2xl text-amber-600 py-3">3</div>
      </div>
    </div>
    <hr class="my-4" />

    <h2>Reversing children order</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-rose-50 to-rose-100 p-10">
      <div class="flex flex-col-reverse divide-y divide-y-reverse divide-rose-400">
        <div class="text-center font-extrabold text-2xl text-rose-600 py-3">1</div>
        <div class="text-center font-extrabold text-2xl text-rose-600 py-3">2</div>
        <div class="text-center font-extrabold text-2xl text-rose-600 py-3">3</div>
      </div>
    </div>
    <hr class="my-4" />

  </div>
</template>

<script>
export default {};
</script>
