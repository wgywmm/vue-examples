<template>
  <div class="component">
    <h1>Flex</h1>
    <hr />
    <h2>Initial</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-indigo-50 to-indigo-100 p-10">
      <p class="text-sm text-indigo-600">Items don't grow when there's extra space</p>
      <div class="mt-2 flex space-x-4">
        <div class="flex-initial rounded-md bg-indigo-500 text-white font-semibold flex items-center justify-center py-3 px-6">
          Short
        </div>
        <div class="flex-initial rounded-md bg-indigo-500 text-white font-semibold flex items-center justify-center py-3 px-6">
          Medium length
        </div>
      </div>

      <p class="mt-8 text-sm text-indigo-600">Items shrink if possible when needed</p>
      <div class="mt-2 flex space-x-4">
        <div class="flex-initial rounded-md bg-indigo-500 text-white font-semibold flex items-center justify-center py-3 px-6">
          Short
        </div>
        <div class="flex-initial rounded-md bg-indigo-500 text-white font-semibold flex items-center justify-center py-3 px-6">
          Medium length
        </div>
        <div class="flex-initial rounded-md bg-indigo-500 text-white font-semibold flex items-center justify-center py-3 px-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui ad labore ipsam, aut rem quo repellat esse tempore id, quidem
        </div>
      </div>
    </div>
    <hr />
    <h2>Flex 1</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-fuchsia-50 to-fuchsia-100 p-10">
      <p class="text-sm text-fuchsia-600">Default behavior</p>
      <div class="mt-2 flex space-x-4">
        <div class="rounded-md bg-fuchsia-500 text-white font-semibold flex items-center justify-center py-3 px-6">
          Short
        </div>
        <div class="rounded-md bg-fuchsia-500 text-white font-semibold flex items-center justify-center py-3 px-6">
          Medium length
        </div>
        <div class="rounded-md bg-fuchsia-500 text-white font-semibold flex items-center justify-center py-3 px-6">
          Significantly larger amount of content
        </div>
      </div>

      <p class="mt-8 text-sm text-fuchsia-600">With <code>.flex-1</code></p>
      <div class="mt-2 flex space-x-4">
        <div class="flex-1 rounded-md bg-fuchsia-500 text-white font-semibold flex items-center justify-center py-3 px-6">
          Short
        </div>
        <div class="flex-1 rounded-md bg-fuchsia-500 text-white font-semibold flex items-center justify-center py-3 px-6">
          Medium length
        </div>
        <div class="flex-1 rounded-md bg-fuchsia-500 text-white font-semibold flex items-center justify-center py-3 px-6">
          Significantly larger amount of content
        </div>
      </div>
    </div>
    <hr>
    <h2>Auto</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-light-blue-50 to-light-blue-100 p-10">
      <p class="text-sm text-light-blue-600">Default behavior</p>
      <div class="mt-2 flex space-x-4">
        <div class="rounded-md bg-light-blue-500 text-white font-semibold flex items-center justify-center py-3 px-6">
          Short
        </div>
        <div class="rounded-md bg-light-blue-500 text-white font-semibold flex items-center justify-center py-3 px-6">
          Medium length
        </div>
        <div class="rounded-md bg-light-blue-500 text-white font-semibold flex items-center justify-center py-3 px-6">
          Significantly larger amount of content
        </div>
      </div>

      <p class="mt-8 text-sm text-light-blue-600">With <code>.flex-auto</code></p>
      <div class="mt-2 flex space-x-4">
        <div class="flex-auto rounded-md bg-light-blue-500 text-white font-semibold flex items-center justify-center py-3 px-6">
          Short
        </div>
        <div class="flex-auto rounded-md bg-light-blue-500 text-white font-semibold flex items-center justify-center py-3 px-6">
          Medium length
        </div>
        <div class="flex-auto rounded-md bg-light-blue-500 text-white font-semibold flex items-center justify-center py-3 px-6">
          Significantly larger amount of content
        </div>
      </div>
    </div>
    <hr />
    <h2>None</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-emerald-50 to-teal-100 p-10">
      <div class="flex space-x-4">
        <div class="flex-1 rounded-md bg-emerald-300 text-white font-semibold flex items-center justify-center py-3 px-6">
          Item that can grow or shrink if needed
        </div>
        <div class="flex-none rounded-md bg-emerald-500 text-white font-semibold flex items-center justify-center py-3 px-6">
          Item that cannot grow or shrink
        </div>
        <div class="flex-1 rounded-md bg-emerald-300 text-white font-semibold flex items-center justify-center py-3 px-6">
          Item that can grow or shrink if needed
        </div>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
export default {};
</script>
