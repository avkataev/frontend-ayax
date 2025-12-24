<script setup lang="ts">

import Sidebar from "~/shared/components/sidebar.vue";
</script>

<template>
<div>
  <div class="max-w-5xl mx-auto py-4">
    <h1 class="text-2xl font-bold uppercase">Агентство недвижимости</h1>
  </div>
  <sidebar />
  <div class="max-w-5xl mx-auto py-4">
    <slot/>
  </div>
</div>
</template>

<style scoped>

</style>