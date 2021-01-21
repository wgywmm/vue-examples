<template>
  <div class="component">
    <h1>Text Decoration</h1>
    <hr class="my-4" />

    <h2>Underline</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-fuchsia-50 to-fuchsia-100 p-10">
      <p class="underline text-xl text-fuchsia-600">The quick brown fox jumped over the lazy dog.</p>
    </div>
    <hr class="my-4" />

    <h2>Line Through</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-rose-50 to-rose-100 p-10">
      <p class="line-through text-xl text-rose-600">The quick brown fox jumped over the lazy dog.</p>
    </div>
    <hr class="my-4" />

    <h2>No Underline</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-purple-50 to-purple-100 p-10">
      <div class="text-center">
        <a
          href="#"
          class="no-underline text-purple-600 text-xl"
        >Link with no underline</a>
      </div>
    </div>
    <hr class="my-4" />

  </div>
</template>

<script>
export default {};
</script>
