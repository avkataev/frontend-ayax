<script setup lang="ts">
import type {Estate} from "~/features/estate/models/estate.model";
import Card from "~/shared/components/card.vue";
import {getCategoryTypeLabel, getDealTypeLabel, getPropertyTypeLabel} from "~/shared/types/estate.constants";
import Tag from "~/shared/components/tag.vue";
import {EstatePropertyType} from "~/shared/types/estate";

defineProps<{
  estate: Estate
}>()

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('ru-RU', {style: 'currency', currency: 'RUB'}).format(price)
}

const formatDate = (date: Date | string) => {
  return new Date(date).toLocaleDateString('ru-RU')
}
</script>

<template>

  <NuxtLoadingIndicator />
  <card class="flex flex-col">
    <img :src="estate.cover" :alt="estate.title" class="w-full h-48 object-cover rounded-lg mb-2">
    <div class="mb-2" >
      <h2 class="text-lg font-normal uppercase">{{ estate.title }}</h2>
      <div class="mb-2 text-right text-green-600 font-bold text-xl">{{ formatPrice(estate.price) }}</div>
      <div class="flex flex-wrap gap-2 text-sm text-gray-500 mb-2">
        <span v-if="estate.property_type !== EstatePropertyType.Land">{{ estate.rooms }} комнат</span>
        <span v-if="estate.property_type !== EstatePropertyType.Land">{{ estate.living_area }} м² (жилая)</span>
        <span v-if="estate.land_area">{{ estate.land_area }} м² (земля)</span>
        <span v-if="estate.property_type === EstatePropertyType.Apartment">{{ estate.floor }}/{{ estate.floor_total }} этаж</span>
        <span v-if="estate.property_type === EstatePropertyType.House">{{ estate.floor_total }} этажка</span>
        <span v-if="estate.property_type !== EstatePropertyType.Land">{{ estate.year_built }} г. постройки</span>
      </div>
      <div class="flex flex-wrap gap-2 text-xs text-gray-400 mb-2">
        <tag>{{ getPropertyTypeLabel(estate.property_type) }}</tag>
        <tag>{{ getCategoryTypeLabel(estate.category_type) }}</tag>
        <tag>{{ getDealTypeLabel(estate.deal_type) }}</tag>
      </div>
      <p class="text-gray-600 text-sm mb-2">{{ estate.address }}, {{ estate.city }}</p>
      <p class="text-gray-700 text-sm line-clamp-3">{{ estate.description }}</p>
    </div>
    <div class="mt-auto py-2 text-xs text-gray-400 border-t">
      Создано: {{ formatDate(estate.created_at) }}
    </div>
  </card>
</template>
