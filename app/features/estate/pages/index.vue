<script setup lang="ts">
import InputSearch from "~/shared/components/input-search.vue";
import {useEstates} from "~/features/estate/composables/estate.composable";

const {estates, loading} = useEstates()
const search = ref('')


</script>

<template>
  <div>
    <h2 class="text-2xl font-normal mb-2">Поиск недвижимости</h2>
    <input-search v-model="search" class="mb-2"/>
    <template v-if="estates?.length">
      <div v-for="(item, index) in estates" :key="index">
        {{ item }}
      </div>
    </template>
    <div v-else class="text-lg">
      Нет данных для отображения
    </div>
  </div>
</template>

<style scoped>

</style>