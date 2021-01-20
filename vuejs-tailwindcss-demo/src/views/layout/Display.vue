<template>
  <div class="component">
    <h1>Display</h1>
    <hr />
    <h2>Block</h2>
    <div class="space-y-4 ...">
      <span class="block ...">1</span>
      <span class="block ...">2</span>
      <span class="block ...">3</span>
    </div>
    <hr />
    <h2>Flow-Root</h2>
    <div class="space-y-4">
      <div class="flow-root ...">
        <div class="my-4 ...">1</div>
      </div>
      <div class="flow-root ...">
        <div class="my-4 ...">2</div>
      </div>
    </div>
    <hr />
    <h2>Inline Block</h2>
    <div class="space-x-4 ...">
      <div class="inline-block ...">1</div>
      <div class="inline-block ...">2</div>
      <div class="inline-block ...">3</div>
    </div>
    <hr />
    <h2>Inline</h2>
    <div>
      <div class="inline ...">1</div>
      <div class="inline ...">2</div>
      <div class="inline ...">3</div>
    </div>
    <hr />
    <h2>Flex</h2>
    <div class="flex space-x-4 ...">
      <div class="flex-1 ...">1</div>
      <div class="flex-1 ...">2</div>
      <div class="flex-1 ...">3</div>
    </div>
    <hr />
    <h2>Inline flex</h2>
    <div class="inline-flex space-x-4 ...">
      <div class="flex-1 ...">1</div>
      <div class="flex-1 ...">2</div>
      <div class="flex-1 ...">3</div>
    </div>
    <hr />
    <h2>Grid</h2>
    <div class="grid gap-4 grid-cols-3">
      <!-- ... -->
    </div>
    <hr />
    <h2>Inline Grid</h2>
    <span class="inline-grid grid-cols-3 gap-x-4">
      <span>1</span>
      <span>1</span>
      <span>1</span>
    </span>
    <span class="inline-grid grid-cols-3 gap-x-4">
      <span>2</span>
      <span>2</span>
      <span>2</span>
    </span>
    <hr />
    <h2>Contents</h2>
    <div class="flex ...">
      <div class="flex-1 ...">1</div>
      <div class="contents">
        <div class="flex-1 ...">2</div>
        <div class="flex-1 ...">3</div>
      </div>
      <div class="flex-1 ...">4</div>
    </div>
    <hr />
    <h2>Table</h2>
    <div class="table w-full ...">
      <div class="table-row-group">
        <div class="table-row">
          <div class="table-cell ...">A cell with more content</div>
          <div class="table-cell ...">Cell 2</div>
          <div class="table-cell ...">Cell 3</div>
        </div>
        <div class="table-row">
          <div class="table-cell ...">Cell 4</div>
          <div class="table-cell ...">A cell with more content</div>
          <div class="table-cell ...">Cell 6</div>
        </div>
      </div>
    </div>
    <hr />
    <h2>Hidden</h2>
    <div class="flex ...">
      <div class="hidden ...">1</div>
      <div>2</div>
      <div>3</div>
    </div>
    <hr />
    <h2>Responsive</h2>
    <div class="flex md:inline-flex ...">
      <!-- ... -->
    </div>
    <hr />
  </div>
</template>

<script>
export default {};
</script>
