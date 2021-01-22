<template>
  <div class="component">
    <h1>User Select</h1>
    <hr class="my-4" />

    <h2>Disable selecting text</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-amber-50 to-amber-100 p-10">
      <div class="mx-auto max-w-sm bg-amber-200 p-2 select-none text-center">
        This text is not selectable
      </div>
    </div>
    <hr class="my-4" />

    <h2>Allow selecting text</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-emerald-50 to-teal-100 p-10">
      <div class="mx-auto max-w-sm bg-emerald-200 p-2 select-text text-center">
        This text is selectable
      </div>
    </div>
    <hr class="my-4" />

    <h2>Select all text in one click</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-fuchsia-50 to-fuchsia-100 p-10">
      <div class="mx-auto max-w-sm bg-fuchsia-200 p-2 select-all text-center">
        Click anywhere in this text to select it all
      </div>
    </div>
    <hr class="my-4" />

    <h2>Auto</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-light-blue-50 to-light-blue-100 p-10">
      <div class="mx-auto max-w-sm bg-light-blue-200 p-2 select-auto text-center">
        This text is selectable
      </div>
    </div>
    <hr class="my-4" />
  </div>
</template>

<script>
export default {};
</script>
