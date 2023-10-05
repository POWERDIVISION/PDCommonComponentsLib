<script setup lang="ts">
import { computed, ref, watch } from 'vue'
// types
import type {
  InputFieldType,
  InputSize,
  InputType
} from '@/types/FormTypes/InputTypes/InputInterface'

const modelValue = defineModel()

const {
  type = 'standard',
  fieldType = 'text',
  size = 'medium',
  placeholder = '',
  label = '',
  disable = false
} = defineProps<{
  type?: InputType
  fieldType?: InputFieldType
  size?: InputSize
  placeholder?: string
  label?: string
  disable?: boolean
}>()

const sizesContained = { small: 'pt-4 pb-1', medium: 'pt-5 pb-2' }
const sizesOutlined = { small: 'py-2 px-4', medium: 'py-4 px-4' }
const sizesText = { small: 'py-3 px-3', medium: 'py-4 px-3' }
const sizeClass = computed(() => {
  switch (type) {
    case 'standard':
      return sizesContained[size]
    case 'outlined':
      return sizesOutlined[size]
    case 'text':
      return sizesText[size]
    default:
      return sizesContained['medium']
  }
})
const borderType = computed(() => {
  let baseBorderCol = 'border-other-input-line-100 dark:border-other-input-line-200'
  switch (type) {
    case 'standard':
      return `border-b ${baseBorderCol}`
    case 'outlined':
      return `border ${baseBorderCol} rounded-lg`
    case 'text':
      return `border-b rounded-t-lg ${baseBorderCol}`
    default:
      return `border-b ${baseBorderCol}`
  }
})

const isFocused = ref(false)

const labelClass = computed(() => {
  switch (type) {
    case 'standard':
      return 'top-0 left-0'
    case 'outlined':
      return '-top-[6px] left-3 px-1 bg-bgCol-surface-100 dark:bg-bgCol-surface-200'
    case 'text':
      return 'top-0 left-3'
    default:
      return 'top-0 left-0'
  }
})
const labelClassBasedOnFocus = computed(() => {
  if (!isFocused.value && !placeholder && !modelValue.value) {
    return 'top-[50%] -translate-y-1 left-3'
  }
  return labelClass.value
})
</script>

<template>
  <div
    class="group flex items-center relative text-textCol-primary-100 dark:text-textCol-primary-200"
  >
    <input
      v-model="modelValue"
      @focusin="isFocused = true"
      @focusout="isFocused = false"
      :type="fieldType"
      :placeholder="placeholder"
      :disabled="disable"
      :data-disable="disable"
      :class="[
        sizeClass,
        borderType,
        {
          'bg-transparent': type !== 'text',
          'bg-bgCol-top-100 dark:bg-bgCol-top-200': type === 'text'
        }
      ]"
      class="w-full outline-none min-h-[44px] cursor-pointer"
    />
    <span
      v-if="label"
      class="absolute uppercase text-[10px] font-medium group-hover:text-primary-100 transition-all select-none"
      :class="[labelClassBasedOnFocus]"
      >{{ label }}</span
    >
  </div>
</template>

<style scoped></style>
