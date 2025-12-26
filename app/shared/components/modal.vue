<script setup lang="ts">
const model = defineModel()
</script>

<template>
  <div v-if="model" class="fixed w-full h-full top-0 left-0">
    <div @click="model = false" class="w-full h-full bg-gray-500 opacity-70"></div>
    <div class="p-4 absolute bg-gray-50 w-125 min-h-20 max-h-[90vh] overflow-y-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg">
      <slot/>
    </div>
  </div>
</template>

<style scoped>
</style>
