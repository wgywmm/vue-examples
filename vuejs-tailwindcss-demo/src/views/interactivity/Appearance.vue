<template>
  <div class="component">
    <h1>Appearance</h1>
    <hr class="my-4" />

    <h2>Usage</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-indigo-50 to-indigo-100 p-10">
      <div class="max-w-sm mx-auto">
        <div class="flex my-4">
          <select class="w-16">
            <option>Yes</option>
            <option>No</option>
            <option>Maybe</option>
          </select>
          <div class="mx-4">
            Default browser styles applied
          </div>
        </div>
        <div class="flex my-4">
          <select class="appearance-none w-16">
            <option>Yes</option>
            <option>No</option>
            <option>Maybe</option>
          </select>
          <div class="mx-4">
            Default styles removed
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
