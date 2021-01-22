<template>
  <div class="component">
    <h1>Border Collapse</h1>
    <hr class="my-4" />

    <h2>Separate</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-emerald-50 to-teal-100 p-10">
      <table class="border-separate w-full border-2 border-emerald-800">
        <thead class="bg-emerald-200">
          <tr>
            <th class="border-2 border-emerald-600 px-4 py-2 text-emerald-800 text-left font-flow">State</th>
            <th class="border-2 border-emerald-600 px-4 py-2 text-emerald-800 text-left font-flow">City</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border-2 border-emerald-600 px-4 py-2 font-flow text-emerald-400">Indiana</td>
            <td class="border-2 border-emerald-600 px-4 py-2 font-flow text-emerald-400">Indianapolis</td>
          </tr>
          <tr>
            <td class="border-2 border-emerald-600 px-4 py-2 font-flow text-emerald-400">Ohio</td>
            <td class="border-2 border-emerald-600 px-4 py-2 font-flow text-emerald-400">Columbus</td>
          </tr>
          <tr>
            <td class="border-2 border-emerald-600 px-4 py-2 font-flow text-emerald-400">Michigan</td>
            <td class="border-2 border-emerald-600 px-4 py-2 font-flow text-emerald-400">Detroit</td>
          </tr>
        </tbody>
      </table>
    </div>
    <hr class="my-4" />

    <h2>Collapse</h2>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-emerald-50 to-teal-100 p-10">
      <table class="border-collapse w-full border-2 border-emerald-800">
        <thead class="bg-emerald-200">
          <tr>
            <th class="border-2 border-emerald-600 px-4 py-2 text-emerald-800 text-left font-flow">State</th>
            <th class="border-2 border-emerald-600 px-4 py-2 text-emerald-800 text-left font-flow">City</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border-2 border-emerald-600 px-4 py-2 font-flow text-emerald-400">Indiana</td>
            <td class="border-2 border-emerald-600 px-4 py-2 font-flow text-emerald-400">Indianapolis</td>
          </tr>
          <tr>
            <td class="border-2 border-emerald-600 px-4 py-2 font-flow text-emerald-400">Ohio</td>
            <td class="border-2 border-emerald-600 px-4 py-2 font-flow text-emerald-400">Columbus</td>
          </tr>
          <tr>
            <td class="border-2 border-emerald-600 px-4 py-2 font-flow text-emerald-400">Michigan</td>
            <td class="border-2 border-emerald-600 px-4 py-2 font-flow text-emerald-400">Detroit</td>
          </tr>
        </tbody>
      </table>
    </div>
    <hr class="my-4" />

  </div>
</template>

<script>
export default {};
</script>
