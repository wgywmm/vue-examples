<template>
  <div class="component">
    <h1>Ring Offset Width</h1>
    <hr class="my-4" />

    <h2>Usage</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-fuchsia-50 to-fuchsia-100 p-0 border -mb-px">
      <div class="bg-white grid grid-cols-1 sm:grid-cols-3 gap-6 justify-items-center p-8 ">
        <button
          tabindex="-1"
          class="focus:outline-none text-sm w-32 py-3 rounded-md font-semibold text-white bg-pink-500 ring ring-pink-600 ring-offset-0"
        >
          ring-offset-0
        </button>
        <button
          tabindex="-1"
          class="focus:outline-none text-sm w-32 py-3 rounded-md font-semibold text-white bg-pink-500 ring ring-pink-600 ring-offset-2"
        >
          ring-offset-2
        </button>
        <button
          tabindex="-1"
          class="focus:outline-none text-sm w-32 py-3 rounded-md font-semibold text-white bg-pink-500 ring ring-pink-600 ring-offset-4"
        >
          ring-offset-4
        </button>
      </div>
    </div>
    <hr class="my-4" />

    <h2>Changing the offset color</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-emerald-50 to-teal-100 p-0">
      <div class="bg-emerald-100 grid grid-cols-1 gap-6 justify-items-center p-8 ">
        <p class="font-semibold text-emerald-600">bg-green-100</p>
        <button
          tabindex="-1"
          class="focus:outline-none text-sm px-5 py-3 rounded-md font-semibold text-white bg-emerald-500 ring ring-emerald-600 ring-offset-4 ring-offset-emerald-100"
        >
          ring-offset-green-100
        </button>
      </div>
    </div>
    <hr class="my-4" />

  </div>
</template>

<script>
export default {};
</script>
