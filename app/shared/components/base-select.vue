<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

interface Option<T> {
  label: string
  value: T
}

const props = defineProps<{
  options: Option<any>[]
  placeholder?: string
}>()
const model = defineModel()
</script>

<template>
  <div class="relative w-full">
    <label class="font-normal">{{placeholder}}:</label>

    <select
        v-model="model"
        class="block w-full rounded-lg border border-gray-300 bg-white py-2 px-3 pr-10 text-gray-900 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none appearance-none"
    >
      <option disabled value="">{{ placeholder }}</option>
      <option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>

    <div class="pointer-events-none absolute bottom-2.5 right-0 flex items-center pr-3">
      <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none"
           viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M19 9l-7 7-7-7"/>
      </svg>
    </div>
  </div>
</template>