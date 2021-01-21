<template>
  <div class="component">
    <h1>Background Attachment</h1>
    <hr class="my-4" />

    <h2>Fixed</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-light-blue-50 to-light-blue-100 p-10">
      <div
        class="w-full h-48 bg-fixed bg-contain bg-center overflow-y-scroll"
        style="background-image:url('https://tailwindcss.com/img/placeholder-light-blue.svg');"
      >
        <div class="h-64"></div>
      </div>
    </div>
    <hr class="my-4" />

    <h2>Local</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-indigo-50 to-indigo-100 p-10">
      <div
        class="w-full h-72 bg-local bg-cover bg-center overflow-y-scroll"
        style="background-image:url('https://tailwindcss.com/img/placeholder-indigo.svg');"
      >
        <div class="h-96"></div>
      </div>
    </div>
    <hr class="my-4" />

    <h2>Scroll</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-fuchsia-50 to-fuchsia-100 p-10">
      <div
        class="w-full h-72 bg-scroll bg-cover overflow-y-scroll"
        style="background-image:url('https://tailwindcss.com/img/placeholder-fuchsia.svg');"
      >
        <div class="h-96"></div>
      </div>
    </div>
    <hr class="my-4" />

  </div>
</template>

<script>
export default {};
</script>
