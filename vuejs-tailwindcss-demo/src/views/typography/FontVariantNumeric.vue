<template>
  <div class="component">
    <h1>Font Variant Numeric</h1>
    <hr class="my-4" />

    <h2>Ordinal</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-emerald-50 to-teal-100 p-10">
      <p class="font-source ordinal text-3xl text-center text-emerald-600">1st</p>
    </div>
    <hr class="my-4" />

    <h2>Slashed Zero</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-light-blue-50 to-light-blue-100 p-10">
      <p class="font-source slashed-zero text-3xl text-center text-light-blue-600">0</p>
    </div>
    <hr class="my-4" />

    <h2>Lining figures</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-rose-50 to-rose-100 p-10">
      <p class="font-source lining-nums text-3xl text-center text-rose-600">1234567890</p>
    </div>
    <hr class="my-4" />

    <h2>Oldstyle figures</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-fuchsia-50 to-fuchsia-100 p-10">
      <p class="font-source oldstyle-nums text-3xl text-center text-fuchsia-600">1234567890</p>
    </div>
    <hr class="my-4" />

    <h2>Proportional figures</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-indigo-50 to-indigo-100 p-10">
      <div class="max-w-sm text-right">
        <p class="font-source proportional-nums text-3xl text-indigo-600">12121</p>
        <p class="font-source proportional-nums text-3xl text-indigo-600">90909</p>
      </div>
    </div>
    <hr class="my-4" />

    <h2>Tabular figures</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-amber-50 to-amber-100 p-10">
      <div class="max-w-sm text-right">
        <p class="font-source tabular-nums text-3xl text-amber-600">12121</p>
        <p class="font-source tabular-nums text-3xl text-amber-600">90909</p>
      </div>
    </div>
    <hr class="my-4" />

    <h2>Diagonal fractions</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-emerald-50 to-teal-100 p-10">
      <p class="font-source diagonal-fractions text-3xl text-center text-emerald-600">1/2 3/4 5/6</p>
    </div>
    <hr class="my-4" />

    <h2>Stacked fractions</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-light-blue-50 to-light-blue-100 p-10">
      <p class="font-ubuntu-mono stacked-fractions text-3xl text-center text-light-blue-600">1/2 3/4 5/6</p>
    </div>
    <hr class="my-4" />

    <h2>Resetting numeric font variants</h2>
    <p class="slashed-zero tabular-nums md:normal-nums ...">12345</p>
    <hr class="my-4" />
  </div>
</template>

<script>
export default {};
</script>
