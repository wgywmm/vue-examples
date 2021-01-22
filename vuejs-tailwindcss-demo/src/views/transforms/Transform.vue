<template>
  <div class="component">
    <h1>Transform</h1>
    <hr class="my-4" />

    <h2>Transform</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-amber-50 to-amber-100 p-10">
      <div class="flex flex-col justify-around space-y-12 md:flex-row md:space-y-0 md:space-x-12">
        <div class="w-16 h-16 bg-amber-400 bg-stripes bg-stripes-white">
          <img
            class="h-16 w-16 transform rotate-45"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
          >
        </div>
        <div class="w-16 h-16 bg-amber-400 bg-stripes bg-stripes-white">
          <img
            class="h-16 w-16 transform skew-y-12"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
          >
        </div>
        <div class="w-16 h-16 bg-amber-400 bg-stripes bg-stripes-white">
          <img
            class="h-16 w-16 transform scale-50"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
          >
        </div>
        <div class="w-16 h-16 bg-amber-400 bg-stripes bg-stripes-white">
          <img
            class="h-16 w-16 transform translate-x-4 translate-y-4"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
          >
        </div>
      </div>
    </div>
    <hr class="my-4" />

    <h2>Hardware acceleration</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-amber-50 to-amber-100 p-10">
      <div class="flex flex-col justify-around space-y-12 md:flex-row md:space-y-0 md:space-x-12">
        <div class="w-16 h-16 bg-amber-400 bg-stripes bg-stripes-white">
          <img
            class="h-16 w-16 transform-gpu rotate-45"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
          >
        </div>
        <div class="w-16 h-16 bg-amber-400 bg-stripes bg-stripes-white">
          <img
            class="h-16 w-16 transform-gpu skew-y-12"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
          >
        </div>
        <div class="w-16 h-16 bg-amber-400 bg-stripes bg-stripes-white">
          <img
            class="h-16 w-16 transform-gpu scale-50"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
          >
        </div>
        <div class="w-16 h-16 bg-amber-400 bg-stripes bg-stripes-white">
          <img
            class="h-16 w-16 transform-gpu translate-x-4 translate-y-4"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
          >
        </div>
      </div>
    </div>
    <hr class="my-4" />

    <h2>None</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-amber-50 to-amber-100 p-10">
      <div class="flex flex-col justify-around space-y-12 md:flex-row md:space-y-0 md:space-x-12">
        <div class="w-16 h-16 bg-amber-400 bg-stripes bg-stripes-white">
          <img
            class="h-16 w-16 transform-none rotate-45"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
          >
        </div>
        <div class="w-16 h-16 bg-amber-400 bg-stripes bg-stripes-white">
          <img
            class="h-16 w-16 transform-none skew-y-12"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
          >
        </div>
        <div class="w-16 h-16 bg-amber-400 bg-stripes bg-stripes-white">
          <img
            class="h-16 w-16 transform-none scale-50"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
          >
        </div>
        <div class="w-16 h-16 bg-amber-400 bg-stripes bg-stripes-white">
          <img
            class="h-16 w-16 transform-none translate-x-4 translate-y-4"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
          >
        </div>
      </div>
    </div>
    <hr class="my-4" />

  </div>
</template>

<script>
export default {};
</script>
