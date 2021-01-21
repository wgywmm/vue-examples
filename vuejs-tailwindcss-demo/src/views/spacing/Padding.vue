<template>
  <div class="component">
    <h1>Padding</h1>
    <hr class="my-4" />
    <h2>Add padding to a single side</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-rose-50 to-rose-100 p-10">
      <div class="flex flex-wrap items-start justify-center text-white font-mono -mx-5">
        <div class="mx-5 bg-rose-500 bg-stripes bg-stripes-white rounded-md overflow-hidden pt-6">
          <div class="bg-rose-500 flex items-center justify-center py-3 px-4">
            pt-6
          </div>
        </div>
        <div class="mx-5 bg-rose-500 bg-stripes bg-stripes-white rounded-md overflow-hidden pr-4 mt-6">
          <div class="bg-rose-500 flex items-center justify-center py-3 px-4">
            pr-4
          </div>
        </div>
        <div class="mx-5 bg-rose-500 bg-stripes bg-stripes-white rounded-md overflow-hidden pb-8 mt-6">
          <div class="bg-rose-500 flex items-center justify-center py-3 px-4">
            pb-8
          </div>
        </div>
        <div class="mx-5 bg-rose-500 bg-stripes bg-stripes-white rounded-md overflow-hidden pl-2 mt-6">
          <div class="bg-rose-500 flex items-center justify-center py-3 px-4">
            pl-2
          </div>
        </div>
      </div>
    </div>
    <hr class="my-4" />

    <h2>Add horizontal padding</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-emerald-50 to-teal-100 p-10">
      <div class="flex justify-center text-white font-mono">
        <div class="bg-emerald-500 bg-stripes bg-stripes-white rounded-md overflow-hidden px-8">
          <div class="bg-emerald-500 py-3 px-4">px-8</div>
        </div>
      </div>
    </div>
    <hr class="my-4" />

    <h2>Add vertical padding</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-indigo-50 to-indigo-100 p-10">
      <div class="flex justify-center text-white font-mono">
        <div class="bg-indigo-500 bg-stripes bg-stripes-white rounded-md overflow-hidden py-8">
          <div class="bg-indigo-500 py-3 px-4">py-8</div>
        </div>
      </div>
    </div>
    <hr class="my-4" />

    <h2>Add padding to all sides</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-fuchsia-50 to-fuchsia-100 p-10">
      <div class="flex justify-center text-white font-mono">
        <div class="bg-fuchsia-500 bg-stripes bg-stripes-white rounded-md overflow-hidden p-8">
          <div class="bg-fuchsia-500 py-3 px-4">p-8</div>
        </div>
      </div>
    </div>
    <hr class="my-4" />

  </div>
</template>

<script>
export default {};
</script>
