<template>
  <div class="component">
    <h1>Transition Delay</h1>
    <hr class="my-4" />

    <h2>Usage</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-amber-50 to-amber-100 p-10">
      <div class="flex justify-around items-center">
        <button class="transition delay-150 duration-300 ease-in-out transform hover:scale-125 bg-amber-600 text-white font-semibold px-6 py-3 rounded-md">
          Hover me
        </button>
        <button class="transition delay-300 duration-300 ease-in-out transform hover:scale-125 bg-amber-600 text-white font-semibold px-6 py-3 rounded-md">
          Hover me
        </button>
        <button class="transition delay-700 duration-300 ease-in-out transform hover:scale-125 bg-amber-600 text-white font-semibold px-6 py-3 rounded-md">
          Hover me
        </button>
      </div>
    </div>
    <hr class="my-4" />

  </div>
</template>

<script>
export default {};
</script>
