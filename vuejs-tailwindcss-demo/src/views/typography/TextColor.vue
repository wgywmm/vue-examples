<template>
  <div class="component">
    <h1>Text Color</h1>
    <hr class="my-4" />

    <h2>Usage</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-gray-50 to-gray-100 p-10">
      <p class="text-purple-600 text-center text-xl font-semibold truncate">
        The quick brown fox jumped over the lazy dog.
      </p>
    </div>
    <hr class="my-4" />

    <h2>Changing opacity</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-gray-50 to-gray-100 p-10">
      <div class="space-y-4">
        <p class="font-semibold text-xl text-purple-700 text-opacity-100">The quick brown fox jumped over the lazy dog.</p>
        <p class="font-semibold text-xl text-purple-700 text-opacity-75">The quick brown fox jumped over the lazy dog.</p>
        <p class="font-semibold text-xl text-purple-700 text-opacity-50">The quick brown fox jumped over the lazy dog.</p>
        <p class="font-semibold text-xl text-purple-700 text-opacity-25">The quick brown fox jumped over the lazy dog.</p>
        <p class="font-semibold text-xl text-purple-700 text-opacity-0">The quick brown fox jumped over the lazy dog.</p>
      </div>
    </div>
    <hr class="my-4" />

  </div>
</template>

<script>
export default {};
</script>
