<template>
  <div class="component">
    <h1>Vertical Alignment</h1>
    <hr class="my-4" />

    <h2>Baseline</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-light-blue-50 to-light-blue-100 p-10">
      <div class="leading-none relative">
        <span class="w-0 h-8 inline-block align-baseline">
          <span class="absolute top-0 border-light-blue-300 border-t border-b border-dashed w-full h-8"></span>
          <span class="absolute top-0 border-light-blue-300 border-t border-b border-dashed w-full h-4"></span>
        </span>
        <span class="relative z-10 text-light-blue-600 font-medium">The quick brown fox jumped over the lazy dog.</span>
      </div>
    </div>
    <hr class="my-4" />

    <h2>Top</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-emerald-50 to-teal-100 p-10">
      <div class="leading-none relative">
        <span class="w-0 h-8 inline-block align-top">
          <span class="absolute top-0 border-emerald-300 border-t border-b border-dashed w-full h-8"></span>
          <span class="absolute top-0 border-emerald-300 border-t border-b border-dashed w-full h-4"></span>
        </span>
        <span class="relative z-10 text-emerald-600 font-medium">The quick brown fox jumped over the lazy dog.</span>
      </div>
    </div>
    <hr class="my-4" />

    <h2>Middle</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-purple-50 to-purple-100 p-10">
      <div class="leading-none relative">
        <span class="w-0 h-8 inline-block align-middle">
          <span class="absolute top-0 border-purple-300 border-t border-b border-dashed w-full h-8"></span>
          <span class="absolute top-0 border-purple-300 border-t border-b border-dashed w-full h-4"></span>
        </span>
        <span class="relative z-10 text-purple-600 font-medium">The quick brown fox jumped over the lazy dog.</span>
      </div>
    </div>
    <hr class="my-4" />

    <h2>Bottom</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-rose-50 to-rose-100 p-10">
      <div class="leading-none relative">
        <span class="w-0 h-8 inline-block align-bottom">
          <span class="absolute top-0 border-rose-300 border-t border-b border-dashed w-full h-8"></span>
          <span class="absolute top-0 border-rose-300 border-t border-b border-dashed w-full h-4"></span>
        </span>
        <span class="relative z-10 text-rose-600 font-medium">The quick brown fox jumped over the lazy dog.</span>
      </div>
    </div>
    <hr class="my-4" />

    <h2>Text Top</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-amber-50 to-amber-100 p-10">
      <div class="leading-none relative">
        <span class="w-0 h-8 inline-block align-text-top">
          <span class="absolute top-0 border-amber-300 border-t border-b border-dashed w-full h-8"></span>
          <span class="absolute top-0 border-amber-300 border-t border-b border-dashed w-full h-4"></span>
        </span>
        <span class="relative z-10 text-amber-600 font-medium">The quick brown fox jumped over the lazy dog.</span>
      </div>
    </div>
    <hr class="my-4" />

    <h2>Text Bottom</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-fuchsia-50 to-fuchsia-100 p-10">
      <div class="leading-none relative">
        <span class="w-0 h-8 inline-block align-text-bottom">
          <span class="absolute top-0 border-fuchsia-300 border-t border-b border-dashed w-full h-8"></span>
          <span class="absolute top-0 border-fuchsia-300 border-t border-b border-dashed w-full h-4"></span>
        </span>
        <span class="relative z-10 text-fuchsia-600 font-medium">The quick brown fox jumped over the lazy dog.</span>
      </div>
    </div>
    <hr class="my-4" />
  </div>
</template>

<script>
export default {};
</script>
