<script setup lang="ts">
import InputSearch from "~/shared/components/input-search.vue";
import {useEstates} from "~/features/estate/composables/useEstates";
import EstateCard from "~/features/estate/components/estate-card.vue";
import {
  EstatePropertyTypeOptions,
  EstateCategoryTypeOptions,
  EstateDealTypeOptions
} from "~/shared/types/estate.constants";
import BaseSelect from "~/shared/components/base-select.vue";
import BaseInput from "~/shared/components/base-input.vue";
import type {Estate} from "~/features/estate/models/estate.model";

const {estates} = useEstates({ immediate: true });

const estatesFiltered = computed(
    () => estates.value
        ?.filter(estate => estate.title.toLowerCase().includes(filters.search.toLowerCase()))
        .filter(estate => estate.property_type === filters.propertyType || !filters.propertyType)
        .filter(estate => estate.category_type === filters.categoryType || !filters.categoryType)
        .filter(estate => estate.deal_type === filters.dealType || !filters.dealType)
        .filter(filterPrice)
)

const filters = reactive({
  search: '',
  propertyType: '',
  categoryType: '',
  dealType: '',
  livingArea: {
    min: 0,
    max: 0,
  }
})

const filterPrice = (estate: Estate) => {
  if (filters.livingArea.min > filters.livingArea.max) return estate.living_area > filters.livingArea.min
  if (!filters.livingArea.max) return true;
  return estate.living_area > filters.livingArea.min && estate.living_area < filters.livingArea.max
}
</script>

<template>
  <div>
    <h2 class="text-2xl font-normal mb-4">Поиск недвижимости</h2>
    <input-search v-model="filters.search" class="mb-4"/>
    <div class="flex gap-4 mb-4 items-center">
      <div class="flex-1">
        <label class="font-normal">Квадратура:</label>
        <div class="flex gap-2 items-center">
          <base-input :min="0" type="number" v-model="filters.livingArea.min"/>-
          <base-input :min="filters.livingArea.min" type="number" v-model="filters.livingArea.max"/>
        </div>
      </div>
      <base-select
          class="flex-1"
          v-model="filters.propertyType"
          :options="EstatePropertyTypeOptions"
          placeholder="Выберите тип недвижимости"
      />
      <base-select
          class="flex-1"
          v-model="filters.categoryType"
          :options="EstateCategoryTypeOptions"
          placeholder="Статус недвижимости"
      />

      <base-select
          class="flex-1"
          v-model="filters.dealType"
          :options="EstateDealTypeOptions"
          placeholder="Выберите тип сделки"
      />
    </div>

    <div v-if="estatesFiltered?.length" class="grid grid-cols-3 gap-2">
      <router-link
          v-for="(item, index) in estatesFiltered"
          :to="'/estate/' + item.id"
          :key="index"
      >
        <estate-card
            :estate="item"
            class="mb-2"
        />
      </router-link>

    </div>
    <div v-else class="text-lg">
      Нет данных для отображения
    </div>
  </div>
</template>

<style scoped>
</style>