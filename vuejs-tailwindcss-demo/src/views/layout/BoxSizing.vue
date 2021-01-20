<template>
  <div class="component">
    <h1>Box Sizing</h1>
    <hr />
    <h2>Include borders and padding</h2>
    <div class="box-border h-32 w-32 p-4 border-4">box-border</div>
    <hr />
    <h2>Exclude borders and padding</h2>
    <div class="box-content h-32 w-32 p-4 border-4">box-content</div>
    <hr />
    <h2>Responsive</h2>
    <div class="box-border md:box-content h-32 w-32 p-4 border-4"></div>
    <hr />
  </div>
</template>

<script>
export default {};
</script>
