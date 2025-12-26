<script setup lang="ts">
import InputSearch from "~/shared/components/input-search.vue";
import Modal from "~/shared/components/modal.vue";
import {useEstates} from "~/features/estate/composables/useEstates";
import EstateCard from "~/features/estate/components/estate-card.vue";

const {estates, execute, query} = useEstates()
const search = ref('')

const isSearchModal = ref(false)

const onBlurSearch = async () => {
  if (search.value) {
    query.value = search.value ? '?search=' + search.value : ''
    await execute()
  }
  isSearchModal.value = !!search.value
}


</script>
<template>
<div>
  <h2 class="text-2xl font-normal mb-4">Главная</h2>
  <input-search @blur="onBlurSearch" v-model="search" placeholder="Начните поиск" class="mb-4"/>
  <modal v-model="isSearchModal">
    <input-search @blur="onBlurSearch" v-model="search" placeholder="Начните поиск" class="mb-4"/>
    <div v-if="estates?.length" class="grid grid-cols-2 gap-2">
      <router-link
          v-for="(item, index) in estates"
          :to="'/estate/'+item.id"
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
  </modal>
</div>
</template>

<style scoped>

</style>