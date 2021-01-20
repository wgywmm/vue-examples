<template>
  <div class="component">
    <h1>Visibility</h1>
    <hr />
    <h2>Invisible</h2>
    <div
      class="rounded-t-xl overflow-hidden bg-gradient-to-r from-indigo-50 to-indigo-100 flex justify-center p-10 space-x-4"
    >
      <div
        class="rounded-md bg-indigo-500 w-32 h-16 flex items-center justify-center text-white text-3xl font-extrabold"
      >
        1
      </div>
      <div
        class="invisible rounded-md bg-indigo-500 w-32 h-16 flex items-center justify-center text-white text-3xl font-extrabold"
      >
        2
      </div>
      <div
        class="rounded-md bg-indigo-500 w-32 h-16 flex items-center justify-center text-white text-3xl font-extrabold"
      >
        3
      </div>
    </div>
    <hr />
    <h2>Visible</h2>
    <div
      class="rounded-t-xl overflow-hidden bg-gradient-to-r from-purple-50 to-purple-100 flex justify-center p-10 space-x-4"
    >
      <div
        class="rounded-md bg-purple-500 w-32 h-16 flex items-center justify-center text-white text-3xl font-extrabold"
      >
        1
      </div>
      <div
        class="visible rounded-md bg-purple-500 w-32 h-16 flex items-center justify-center text-white text-3xl font-extrabold"
      >
        2
      </div>
      <div
        class="rounded-md bg-purple-500 w-32 h-16 flex items-center justify-center text-white text-3xl font-extrabold"
      >
        3
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
export default {};
</script>
