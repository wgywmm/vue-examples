<template>
  <div class="component">
    <h1>Animation</h1>
    <hr class="my-4" />

    <h2>Spin</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-rose-50 to-rose-100 p-10">
      <div class="flex justify-around">
        <span class="inline-flex rounded-md shadow-sm">
          <button
            type="button"
            class="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-rose-600 hover:bg-rose-500 focus:border-rose-700 active:bg-rose-700 transition ease-in-out duration-150 cursor-not-allowed"
            disabled=""
          >
            <svg
              class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Processing
          </button>
        </span>
      </div>
    </div>
    <hr class="my-4" />

    <h2>Ping</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-purple-50 to-purple-100 p-10">
      <div class="flex justify-around">
        <span class="relative inline-flex rounded-md shadow-sm">
          <button
            type="button"
            class="inline-flex items-center px-4 py-2 border border-purple-400 text-base leading-6 font-medium rounded-md text-purple-800 bg-white hover:text-purple-700 focus:border-purple-300 transition ease-in-out duration-150"
          >
            Transactions
          </button>
          <span class="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
          </span>
        </span>
      </div>
    </div>
    <hr class="my-4" />

    <h2>Pulse</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-light-blue-50 to-light-blue-100 p-10">
      <div class="border border-light-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
        <div class="flex space-x-4 animate-pulse">
          <div class="rounded-full bg-light-blue-400 h-12 w-12"></div>
          <div class="flex-1 space-y-4 py-1">
            <div class="h-4 bg-light-blue-400 rounded w-3/4"></div>
            <div class="space-y-2">
              <div class="h-4 bg-light-blue-400 rounded"></div>
              <div class="h-4 bg-light-blue-400 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr class="my-4" />

    <h2>Bounce</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-amber-50 to-amber-100 p-10">
      <div class="flex justify-center">
        <svg
          class="animate-bounce w-6 h-6 text-amber-900"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
    <hr class="my-4" />

  </div>
</template>

<script>
export default {};
</script>
