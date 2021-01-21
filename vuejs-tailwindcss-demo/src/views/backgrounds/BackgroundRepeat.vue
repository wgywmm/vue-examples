<template>
  <div class="component">
    <h1>Background Repeat</h1>
    <hr class="my-4" />

    <h2>Repeat</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-fuchsia-50 to-fuchsia-100 p-10">
      <div
        class="w-full bg-fuchsia-300 h-96 bg-repeat"
        style="background-image:url('https://tailwindcss.com/img/placeholder-fuchsia.svg');"
      >
      </div>
    </div>
    <hr class="my-4" />

    <h2>No Repeat</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-rose-50 to-rose-100 p-10">
      <div
        class="w-full bg-rose-200 h-48 bg-center bg-no-repeat"
        style="background-image:url('https://tailwindcss.com/img/placeholder-rose.svg');"
      >
      </div>
    </div>
    <hr class="my-4" />

    <h2>Repeat Horizontally</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-purple-50 to-purple-100 p-10">
      <div
        class="w-full bg-purple-300 h-48 bg-center bg-repeat-x"
        style="background-image:url('https://tailwindcss.com/img/placeholder-purple.svg');"
      >
      </div>
    </div>
    <hr class="my-4" />

    <h2>Repeat Vertically</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-indigo-50 to-indigo-100 p-10">
      <div
        class="w-full bg-indigo-200 h-96 bg-center bg-repeat-y"
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
