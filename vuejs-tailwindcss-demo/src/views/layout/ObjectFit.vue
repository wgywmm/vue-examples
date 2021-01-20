<template>
  <div class="component">
    <h1>Object Fit</h1>
    <hr />
    <h2>Contain</h2>
    <div
      class="rounded-t-xl overflow-hidden bg-gradient-to-r from-rose-50 to-rose-100 p-10"
    >
      <div
        class="bg-rose-300 bg-stripes bg-stripes-white rounded-md overflow-hidden"
      >
        <img
          class="h-48 w-full object-contain"
          src="https://tailwindcss.com/img/placeholder-rose.svg"
          alt=""
        />
      </div>
    </div>
    <hr />
    <h2>Cover</h2>
    <div
      class="rounded-t-xl overflow-hidden bg-gradient-to-r from-indigo-50 to-indigo-100 p-10"
    >
      <div
        class="bg-indigo-300 bg-stripes bg-stripes-white rounded-md overflow-hidden"
      >
        <img
          class="h-48 w-full object-cover"
          src="https://tailwindcss.com/img/placeholder-indigo.svg"
          alt=""
        />
      </div>
    </div>
    <hr />
    <h2>Fill</h2>
    <div
      class="rounded-t-xl overflow-hidden bg-gradient-to-r from-light-blue-50 to-light-blue-100 p-10"
    >
      <div
        class="bg-light-blue-300 bg-stripes bg-stripes-white rounded-md overflow-hidden"
      >
        <img
          class="h-48 w-full object-fill"
          src="https://tailwindcss.com/img/placeholder-light-blue.svg"
          alt=""
        />
      </div>
    </div>
    <hr />
    <h2>None</h2>
    <div
      class="rounded-t-xl overflow-hidden bg-gradient-to-r from-amber-50 to-amber-100 p-10"
    >
      <div
        class="bg-amber-300 bg-stripes bg-stripes-white rounded-md overflow-hidden"
      >
        <img
          class="h-48 w-full object-none"
          src="https://tailwindcss.com/img/placeholder-amber.svg"
          alt=""
        />
      </div>
    </div>
    <hr />
    <h2>Scale Down</h2>
    <div
      class="rounded-t-xl overflow-hidden bg-gradient-to-r from-emerald-50 to-teal-100 p-10"
    >
      <div
        class="bg-emerald-300 bg-stripes bg-stripes-white rounded-md overflow-hidden"
      >
        <img
          class="h-48 w-full object-scale-down"
          src="https://tailwindcss.com/img/placeholder-emerald.svg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
