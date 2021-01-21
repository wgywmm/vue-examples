<template>
  <div class="component">
    <h1>List Style Type</h1>
    <hr class="my-4" />

    <h2>Usage</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-purple-50 to-purple-100 p-10">
      <div class="mb-6 space-y-2">
        <p class="text-sm text-purple-600">.list-disc</p>
        <ul class="list-disc list-inside text-purple-800">
          <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
          <li>Assumenda, quia temporibus eveniet a libero incidunt suscipit</li>
          <li>Quidem, ipsam illum quis sed voluptatum quae eum fugit earum</li>
        </ul>
      </div>
      <div class="mb-6 space-y-2">
        <p class="text-sm text-purple-600">.list-decimal</p>
        <ol class="list-decimal list-inside text-purple-800">
          <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
          <li>Assumenda, quia temporibus eveniet a libero incidunt suscipit</li>
          <li>Quidem, ipsam illum quis sed voluptatum quae eum fugit earum</li>
        </ol>
      </div>
      <div class="space-y-2">
        <p class="text-sm text-purple-600">.list-none (default)</p>
        <ul class="default text-purple-800">
          <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
          <li>Assumenda, quia temporibus eveniet a libero incidunt suscipit</li>
          <li>Quidem, ipsam illum quis sed voluptatum quae eum fugit earum</li>
        </ul>
        <p></p>
      </div>
    </div>
    <hr class="my-4" />

  </div>
</template>

<script>
export default {};
</script>
