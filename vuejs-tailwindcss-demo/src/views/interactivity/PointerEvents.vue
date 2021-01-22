<template>
  <div class="component">
    <h1>Pointer Events</h1>
    <hr class="my-4" />

    <h2>Usage</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-purple-50 to-purple-100 p-10">
      <div class="max-w-sm">
        <p class="text-gray-700">Try clicking the caret icon to open the dropdown</p>

        <p class="mt-4 text-sm text-gray-600">pointer-events-auto (event captured)</p>
        <div class="mt-1 relative">
          <select class="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
            <option>Indiana</option>
            <option>Michigan</option>
            <option>Ohio</option>
          </select>
          <div class="absolute flex inset-y-0 items-center px-3 right-0 text-gray-700 bg-purple-300 rounded-r pointer-events-auto">
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
            </svg>
          </div>
        </div>

        <p class="mt-4 text-sm text-gray-600">pointer-events-none (event passes through)</p>
        <div class="mt-1 relative">
          <select class="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
            <option>Indiana</option>
            <option>Michigan</option>
            <option>Ohio</option>
          </select>
          <div class="absolute flex inset-y-0 items-center px-3 right-0 text-gray-700 bg-purple-300 rounded-r pointer-events-none">
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <hr class="my-4" />

  </div>
</template>

<script>
export default {};
</script>
