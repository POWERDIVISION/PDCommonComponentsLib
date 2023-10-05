<script setup lang="ts">
import { computed, ref } from 'vue'
// vueuse
import { vOnClickOutside } from '@vueuse/components'

import type {
  SelecboxItem,
  SelectboxSize,
  SelectboxType
} from '@/types/FormTypes/SelectboxTypes/SelectboxInterface'

const modelValue = defineModel()

const {
  type,
  items,
  single = true,
  size = 'medium',
  placeholder = '',
  label = '',
  disable = false
} = defineProps<{
  type: SelectboxType
  items: SelecboxItem[]
  single?: boolean
  size?: SelectboxSize
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
      return sizesContained[size]
  }
})
const borderType = computed(() => {
  switch (type) {
    case 'standard':
      return 'border-b border-other-divider-100 dark:border-other-divider-200'
    case 'outlined':
      return `border border-other-divider-100 dark:border-other-divider-200 rounded-lg`
    case 'text':
      return 'border-b rounded-t-lg border-other-divider-100 dark:border-other-divider-200'
    default:
      return 'border-b border-other-divider-100 dark:border-other-divider-200'
  }
})

const isOpen = ref(false)

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
  if (modelValue.value.length <= 0 && !placeholder) {
    return 'top-[45%] left-3'
  }
  return labelClass.value
})

const toggleOpen = () => {
  if (disable) return
  isOpen.value = !isOpen.value
}

const toggleClose = () => {
  isOpen.value = false
}

const addToModelValue = (item: SelecboxItem) => {
  if (single) {
    modelValue.value = item
  } else {
    //   check if this item is already in the modelValue
    const index = modelValue.value.findIndex((i: SelecboxItem) => i.id === item.id)
    //   if yes, remove it
    if (index !== -1) {
      modelValue.value.splice(index, 1)
    } else {
      //   if no, add it
      modelValue.value.push(item)
    }
    toggleClose()
  }
}
</script>

<template>
  <div
    class="group flex flex-col items-center relative text-textCol-primary-100 dark:text-textCol-primary-200 transition-all w-[300px]"
    @click="toggleOpen"
    v-on-click-outside="toggleClose"
  >
    <div
      :class="[
        sizeClass,
        borderType,
        {
          'bg-transparent': type !== 'text',
          'bg-bgCol-top-100 dark:bg-bgCol-top-100': type === 'text',
          'border-dashed': disable,
          '!bg-bgCol-disabled-100 dark:!bg-bgCol-disabled-200': disable && type === 'text'
        }
      ]"
      class="w-full max-w-full truncate flex gap-1 outline-none min-h-[44px] cursor-pointer"
    >
      <span v-if="single">
        {{ modelValue?.value || placeholder }}
      </span>
      <span v-if="!single" v-for="selected in modelValue" :key="selected.id">
        {{ selected.value }}
      </span>
    </div>
    <span
      v-if="label"
      class="absolute uppercase text-[10px] font-medium transition-all select-none"
      :class="[
        labelClassBasedOnFocus,
        {
          'text-textCol-primary-100 dark:text-textCol-primary-200 group-hover:text-primary':
            !isOpen && !disable,
          'text-primary': isOpen,
          'text-textCol-secondary-100 dark:text-textCol-secondary-200': !isOpen,
          '!text-textCol-disabled-100 dark:!text-textCol-disabled-200': disable
        }
      ]"
      >{{ label }}</span
    >
    <div
      class="absolute w-full bg-bgCol-top-100 dark:bg-bgCol-top-200 top-full flex flex-col rounded-md transition-all shadow-table"
      :class="{
        'opacity-0 hidden ': !isOpen
      }"
    >
      <span
        v-for="item in items"
        :key="item.id"
        @click="addToModelValue(item)"
        class="p-1 px-2 cursor-pointer transition-all first:rounded-t-md last:rounded-b-md"
        :class="{
          'bg-primary-ghost-100 dark:bg-primary-ghost-200 text-textCol-secondary-100 dark:text-textCol-secondary-200':
            single
              ? modelValue?.id === item.id
              : modelValue.findIndex((i: SelecboxItem) => i.id === item.id) !== -1,
          'hover:bg-bgCol-surface-100 dark:hover:bg-bgCol-surface-200': single
            ? modelValue?.id !== item.id
            : modelValue.findIndex((i: SelecboxItem) => i.id === item.id) === -1
        }"
        >{{ item.value }}</span
      >
    </div>
  </div>
</template>

<style scoped></style>
