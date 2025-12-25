<script setup lang="ts">
import InputSearch from "~/shared/components/input-search.vue";
import {useEstates} from "~/features/estate/composables/estate.composable";
import EstateCard from "~/features/estate/components/estate-card.vue";
import {mapEstateResponseToEstate} from "~/features/estate/mappers/estate.mapper";

const {estates, loading} = useEstates()
const search = ref('')

const estatesFiltred = computed(() => estates.value?.filter(estate => estate.title.toLowerCase().includes(search.value.toLowerCase())))
</script>

<template>
  <div>
    <h2 class="text-2xl font-normal mb-2">Поиск недвижимости</h2>
    <input-search v-model="search" class="mb-2"/>
    <div v-if="estatesFiltred?.length" class="grid grid-cols-3 gap-2">
      <estate-card
          v-for="(item, index) in estatesFiltred"
          :estate="mapEstateResponseToEstate(item)"
          class="mb-2"
          :key="index"
      >
        {{ item }}
      </estate-card>
    </div>
    <div v-else class="text-lg">
      Нет данных для отображения
    </div>
  </div>
</template>

<style scoped>

</style>