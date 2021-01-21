<template>
  <div class="component">
    <h1>Font Smoothing</h1>
    <hr class="my-4" />

    <h2>Subpixel Antialiasing</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-light-blue-50 to-light-blue-100 p-10">
      <p class="subpixel-antialiased text-lg text-light-blue-800">The quick brown fox jumped over the lazy dog.</p>
    </div>
    <hr class="my-4" />

    <h2>Grayscale Antialiasing</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-emerald-50 to-teal-100 p-10">
      <p class="antialiased text-lg text-emerald-800">The quick brown fox jumped over the lazy dog.</p>
    </div>
    <hr class="my-4" />

  </div>
</template>

<script>
export default {};
</script>
