<script setup lang="ts">
import { computed } from 'vue'

const modelValue = defineModel()

const {
  color = 'primary',
  label = '',
  size = 'medium'
} = defineProps<{
  label?: string
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info'
  size?: 'small' | 'medium'
}>()

const colors = {
  primary: 'peer-checked:bg-ghostCol-primary-100 peer-checked:after:!bg-primary',
  secondary: 'peer-checked:bg-ghostCol-secondary-100 peer-checked:after:!bg-secondary',
  success: 'peer-checked:bg-ghostCol-success-100 peer-checked:after:!bg-success',
  error: 'peer-checked:bg-ghostCol-error-100 peer-checked:after:!bg-error',
  warning: 'peer-checked:bg-ghostCol-warning-100 peer-checked:after:!bg-warning',
  info: 'peer-checked:bg-ghostCol-info-100 peer-checked:after:!bg-info'
}
const switchBgColor = computed(() => colors[color])

const sizes = {
  small: 'w-[26px] h-[10px] after:h-[16px] after:w-[16px] after:top-[4px] after:left-3',
  medium: 'w-[34px] h-[14px] after:h-[20px] after:w-[20px] after:top-[2px] after:left-3'
}
const switchSize = computed(() => sizes[size])
</script>

<template>
  <div
    class="group relative flex items-center justify-between cursor-pointer pl-4 pr-4 text-tCol-light-primary dark:text-tCol-dark-primary w-fit gap-2 min-h-[24px]"
    @click="modelValue = !modelValue"
  >
    <input v-model="modelValue" type="checkbox" class="sr-only peer outline-none" />
    <div
      class="transition-all bg-light-background dark:bg-dark-background outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:rounded-full after:transition-all"
      :class="[
        switchBgColor,
        switchSize,
        {
          'after:!bg-secondary': !modelValue
        }
      ]"
    />
    <span v-if="label" class="">{{ label }}</span>
  </div>
</template>

<style scoped></style>
