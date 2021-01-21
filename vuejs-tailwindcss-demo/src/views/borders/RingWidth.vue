<template>
  <div class="component">
    <h1>Ring Width</h1>
    <hr class="my-4" />

    <h2>Usage</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-light-blue-50 to-light-blue-100 grid grid-cols-1 sm:grid-cols-4 gap-6 justify-items-center p-8">
      <button
        tabindex="-1"
        class="focus:outline-none text-sm w-24 py-3 rounded-md font-semibold text-white bg-blue-500 ring-0"
      >
        ring-0
      </button>
      <button
        tabindex="-1"
        class="focus:outline-none text-sm w-24 py-3 rounded-md font-semibold text-white bg-blue-500 ring-2"
      >
        ring-2
      </button>
      <button
        tabindex="-1"
        class="focus:outline-none text-sm w-24 py-3 rounded-md font-semibold text-white bg-blue-500 ring"
      >
        ring
      </button>
      <button
        tabindex="-1"
        class="focus:outline-none text-sm w-24 py-3 rounded-md font-semibold text-white bg-blue-500 ring-4"
      >
        ring-4
      </button>
    </div>
    <hr class="my-4" />

    <h2>Focus rings</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-emerald-50 to-teal-100 flex space-x-6 justify-center p-8">
      <button
        tabindex="-1"
        class="focus:outline-none w-32 py-2 rounded-md font-semibold text-white bg-emerald-500 focus:outline-none"
      >
        Unfocused
      </button>
      <button
        tabindex="-1"
        class="focus:outline-none w-32 py-2 rounded-md font-semibold text-white bg-emerald-500 ring-4 ring-emerald-500 ring-opacity-50 focus:outline-none"
      >
        Focused
      </button>
    </div>
    <hr class="my-4" />

    <h2>Inset rings</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-fuchsia-50 to-fuchsia-100 flex space-x-6 justify-center p-8">
      <button
        tabindex="-1"
        class="focus:outline-none w-32 py-2 rounded-md font-semibold text-white bg-pink-500 ring-4 ring-pink-300"
      >
        Default
      </button>
      <button
        tabindex="-1"
        class="focus:outline-none w-32 py-2 rounded-md font-semibold text-white bg-pink-500 ring-4 ring-pink-300 ring-inset"
      >
        Inset
      </button>
    </div>
    <hr class="my-4" />
  </div>
</template>

<script>
export default {};
</script>
