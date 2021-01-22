<template>
  <div class="component">
    <h1>Screen Readers</h1>
    <hr class="my-4" />

    <h2>Usage</h2>
    <a href="#">
      <svg>
        <!-- ... -->
      </svg>
      <span class="sr-only">Settings</span>
    </a>
    <a href="#">
      <svg>
        <!-- ... -->
      </svg>
      <span class="sr-only sm:not-sr-only">Settings</span>
    </a>
    <a
      href="#"
      class="sr-only focus:not-sr-only"
    >
      Skip to content
    </a>
    <hr class="my-4" />

  </div>
</template>

<script>
export default {};
</script>
