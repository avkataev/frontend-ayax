<script setup lang="ts">
import type {RoutesItem} from "~/shared/types/routes";

const routes = ref<RoutesItem[]>([
  {
    label: 'Главная',
    value: '/',
  },
  {
    label: 'Поиск недвижимости',
    value: '/estate',
  },
])
</script>

<template>
  <div class="border-t border-b bg-white">
    <div class="flex gap-2 max-w-5xl mx-auto">
      <router-link
          v-for="item in routes"
          class="p-2 hover:bg-gray-100 cursor-pointer"
          :to="item.value"
      >{{ item.label }}
      </router-link>
    </div>

  </div>
</template>

<style scoped>

</style>