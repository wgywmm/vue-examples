<template>
  <div class="component">
    <h1>Text Overflow</h1>
    <hr class="my-4" />

    <h2>Truncate</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-indigo-50 to-indigo-100 p-10">
      <p class="truncate max-w-xs px-6 py-4 mx-auto bg-indigo-200 text-indigo-500 font-medium rounded-lg">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiisitaquequodpraesentiumexplicaboincidunt? Dolores beatae nam at sed dolorum ratione dolorem nisi velit cum.
      </p>
    </div>
    <hr class="my-4" />

    <h2>Overflow Ellipsis</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-emerald-50 to-teal-100 p-10">
      <p class="overflow-ellipsis overflow-hidden max-w-xs px-6 py-4 mx-auto bg-emerald-200 text-emerald-500 font-medium rounded-lg">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiisitaquequodpraesentiumexplicaboincidunt? Dolores beatae nam at sed dolorum ratione dolorem nisi velit cum.
      </p>
    </div>
    <hr class="my-4" />

    <h2>Overflow Clip</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-light-blue-50 to-light-blue-100 p-10">
      <p class="overflow-clip overflow-hidden max-w-xs px-6 py-4 mx-auto bg-light-blue-200 text-light-blue-500 font-medium rounded-lg">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiisitaquequodpraesentiumexplicaboincidunt? Dolores beatae nam at sed dolorum ratione dolorem nisi velit cum.
      </p>
    </div>
    <hr class="my-4" />

  </div>
</template>

<script>
export default {};
</script>
