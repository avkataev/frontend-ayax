<script setup lang="ts">
import InputSearch from "~/shared/components/input-search.vue";

const search = ref('')
</script>
<template>
<div>
  <h2 class="text-2xl font-normal mb-4">Главная</h2>
  <input-search v-model="search" placeholder="Начните поиск" class="mb-4"/>
</div>
</template>

<style scoped>

</style>