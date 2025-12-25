<script setup lang="ts">
import {defineProps} from "vue";

const model = defineModel()

const props = defineProps<{
  placeholder?: string
  type?: string
  min?: number
  max?: number
}>()
</script>

<template>
  <div class="relative">
    <slot name="icon"></slot>
    <input
        v-model="model"
        :type="type ? type : 'text'"
        class="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
        :class="{'ps-10': $slots.icon}"
        :placeholder="placeholder"
        :min="min"
        :max="max"
        required
    />
  </div>
</template>

<style scoped>

</style>