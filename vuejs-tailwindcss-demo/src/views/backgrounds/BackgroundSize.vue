<template>
  <div class="component">
    <h1>Background Size</h1>
    <hr class="my-4" />

    <h2>Auto</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-amber-50 to-amber-100 p-10">
      <div
        class="w-full bg-amber-200 h-48 bg-auto bg-no-repeat bg-center"
        style="background-image:url('https://tailwindcss.com/img/placeholder-amber.svg');"
      >
      </div>
    </div>
    <hr class="my-4" />

    <h2>Cover</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-emerald-50 to-teal-100 p-10">
      <div
        class="w-full mx-auto bg-emerald-200 h-96 bg-center bg-cover"
        style="background-image:url('https://tailwindcss.com/img/placeholder-emerald.svg');"
      >
      </div>
    </div>
    <hr class="my-4" />

    <h2>Contain</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-indigo-50 to-indigo-100 p-10">
      <div
        class="w-full bg-indigo-300 h-48 bg-center bg-no-repeat bg-contain"
        style="background-image:url('https://tailwindcss.com/img/placeholder-indigo.svg');"
      >
      </div>
    </div>
    <hr class="my-4" />

  </div>
</template>

<script>
export default {};
</script>
