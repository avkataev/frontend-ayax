<script setup lang="ts">
import BaseInput from "~/shared/components/base-input.vue";

const model = defineModel()

const props = defineProps({
  placeholder: {
    type: String,
    default: 'Поиск' // <-- по умолчанию текст
  }
})

const emit = defineEmits<{
  (e: 'blur'): void
}>()
</script>

<template>
  <base-input @blur="() => emit('blur')" :placeholder="placeholder" type="search" v-model="model">
    <template #icon>
      <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <Icon name="uil:search" class="text-gray-400" />
      </div>
    </template>
  </base-input>
</template>

<style scoped>

</style>