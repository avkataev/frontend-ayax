<script setup lang="ts">
const model = defineModel()
</script>

<template>
  <div class="relative">
    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
      <Icon name="uil:search" class="text-gray-400" />
    </div>
    <input
        v-model="model"
        type="search"
        class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Поиск"
        required
    />
  </div>
</template>

<style scoped>

</style>