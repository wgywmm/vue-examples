<template>
  <div class="component">
    <h1>Flex Shrink</h1>
    <hr />
    <h2>Shrink</h2>
    <div class="relative rounded-t-xl bg-stripes bg-stripes-amber-500 bg-amber-100">
      <div>
        <div
          class="relative"
          style="margin-right: 0px;"
        >
          <div class="rounded-t-xl p-6 bg-gradient-to-r from-amber-50 to-amber-100">
            <div class="flex space-x-4">
              <div class="flex-grow flex-shrink-0 h-16 w-16 rounded-md bg-amber-300 text-white text-2xl font-extrabold flex items-center justify-center">
                <svg
                  class="w-5 h-5"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.286 8.875v-2.25a5.58 5.58 0 011.673-3.977A5.76 5.76 0 0110 1a5.76 5.76 0 014.04 1.648 5.581 5.581 0 011.674 3.977v2.25c.606 0 1.188.237 1.617.659.428.422.669.994.669 1.591v5.625c0 .597-.24 1.169-.67 1.591a2.304 2.304 0 01-1.616.659H4.286a2.304 2.304 0 01-1.617-.659A2.233 2.233 0 012 16.75v-5.625c0-.597.24-1.169.67-1.591a2.304 2.304 0 011.616-.659zm9.143-2.25v2.25H6.57v-2.25c0-.895.362-1.754 1.005-2.386A3.456 3.456 0 0110 3.25c.91 0 1.781.356 2.424.989a3.349 3.349 0 011.005 2.386z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <div class="flex-shrink w-64 h-16 rounded-md bg-amber-500 text-white text-2xl font-extrabold flex items-center justify-center px-6">
                <svg
                  class="h-5 w-14"
                  fill="none"
                >
                  <path
                    d="M8 5l5 5m0 0l-5 5m5-5H1M24 10.005l2 1.999 4-3.998m6 1.999C36 14.972 31.97 19 27 19c-4.98 0-9-4.028-9-8.995C17.99 5.028 22.02 1 26.99 1c4.97-.01 9 4.018 9 8.985l.01.02zM46 5l-5 5m0 0l5 5m-5-5h12"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div class="flex-grow flex-shrink-0 h-16 w-16 rounded-md bg-amber-300 text-white text-2xl font-extrabold flex items-center justify-center">
                <svg
                  class="w-5 h-5"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.286 8.875v-2.25a5.58 5.58 0 011.673-3.977A5.76 5.76 0 0110 1a5.76 5.76 0 014.04 1.648 5.581 5.581 0 011.674 3.977v2.25c.606 0 1.188.237 1.617.659.428.422.669.994.669 1.591v5.625c0 .597-.24 1.169-.67 1.591a2.304 2.304 0 01-1.616.659H4.286a2.304 2.304 0 01-1.617-.659A2.233 2.233 0 012 16.75v-5.625c0-.597.24-1.169.67-1.591a2.304 2.304 0 011.616-.659zm9.143-2.25v2.25H6.57v-2.25c0-.895.362-1.754 1.005-2.386A3.456 3.456 0 0110 3.25c.91 0 1.781.356 2.424.989a3.349 3.349 0 011.005 2.386z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none">
        <div
          class="pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing right-0"
          draggable="false"
          style="transform: none; user-select: none; touch-action: pan-y;"
        >
          <div
            class="flex-none rounded bg-white shadow flex items-center justify-center h-8"
            style="width: 0.9375rem;"
          ><svg
              viewBox="0 0 14 24"
              fill="none"
              stroke-width="2"
              stroke="currentColor"
              class="h-3 flex-none text-amber-700"
              style="width: 0.4375rem;"
            >
              <path d="M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"></path>
            </svg></div>
        </div>
      </div>
    </div>
    <hr />
    <h2>Don't shrink</h2>
    <div class="relative rounded-t-xl bg-stripes bg-stripes-light-blue-500 bg-light-blue-100">
      <div>
        <div
          class="relative"
          style="margin-right: 0px;"
        >
          <div class="rounded-t-xl p-6 bg-gradient-to-r from-light-blue-50 to-light-blue-100">
            <div class="flex space-x-4">
              <div class="flex-1 h-16 rounded-md bg-light-blue-300 text-white text-2xl font-extrabold flex items-center justify-center">
                <svg
                  class="h-5 w-14"
                  fill="none"
                >
                  <path
                    d="M8 5l5 5m0 0l-5 5m5-5H1M24 10.005l2 1.999 4-3.998m6 1.999C36 14.972 31.97 19 27 19c-4.98 0-9-4.028-9-8.995C17.99 5.028 22.02 1 26.99 1c4.97-.01 9 4.018 9 8.985l.01.02zM46 5l-5 5m0 0l5 5m-5-5h12"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div class="flex-shrink-0 h-16 w-32 rounded-md bg-light-blue-500 text-white text-2xl font-extrabold flex items-center justify-center">
                <svg
                  class="w-5 h-5"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.286 8.875v-2.25a5.58 5.58 0 011.673-3.977A5.76 5.76 0 0110 1a5.76 5.76 0 014.04 1.648 5.581 5.581 0 011.674 3.977v2.25c.606 0 1.188.237 1.617.659.428.422.669.994.669 1.591v5.625c0 .597-.24 1.169-.67 1.591a2.304 2.304 0 01-1.616.659H4.286a2.304 2.304 0 01-1.617-.659A2.233 2.233 0 012 16.75v-5.625c0-.597.24-1.169.67-1.591a2.304 2.304 0 011.616-.659zm9.143-2.25v2.25H6.57v-2.25c0-.895.362-1.754 1.005-2.386A3.456 3.456 0 0110 3.25c.91 0 1.781.356 2.424.989a3.349 3.349 0 011.005 2.386z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <div class="flex-1 h-16 rounded-md bg-light-blue-300 text-white text-2xl font-extrabold flex items-center justify-center">
                <svg
                  class="h-5 w-14"
                  fill="none"
                >
                  <path
                    d="M8 5l5 5m0 0l-5 5m5-5H1M24 10.005l2 1.999 4-3.998m6 1.999C36 14.972 31.97 19 27 19c-4.98 0-9-4.028-9-8.995C17.99 5.028 22.02 1 26.99 1c4.97-.01 9 4.018 9 8.985l.01.02zM46 5l-5 5m0 0l5 5m-5-5h12"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none">
        <div
          class="pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing right-0"
          draggable="false"
          style="transform: none; user-select: none; touch-action: pan-y;"
        >
          <div
            class="flex-none rounded bg-white shadow flex items-center justify-center h-8"
            style="width: 0.9375rem;"
          ><svg
              viewBox="0 0 14 24"
              fill="none"
              stroke-width="2"
              stroke="currentColor"
              class="h-3 flex-none text-light-blue-700"
              style="width: 0.4375rem;"
            >
              <path d="M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"></path>
            </svg></div>
        </div>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
export default {};
</script>
