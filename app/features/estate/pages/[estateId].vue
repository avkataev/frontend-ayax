<script setup lang="ts">
import {useEstateById} from "~/features/estate/composables/useEstateById";
import EstateCard from "~/features/estate/components/estate-card.vue";

const route = useRoute()
const estateId = computed<string | null>(() => {
  const value = route.params.estateId
  return typeof value === 'string' ? value : null
})

const {estate} = useEstateById(estateId.value)
</script>

<template>
  <estate-card
    v-if="estate"
    :estate="estate"
    class="mb-2"
  />
</template>

<style scoped>

</style>