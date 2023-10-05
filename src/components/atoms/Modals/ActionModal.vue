<script setup lang="ts">
import { computed } from 'vue'
// Types
import type { ModalMessageVariant, ModalType } from '../../../types/ModalTypes/ModalInterface'
import type { BaseColor } from '@/types/BaseTypes/ColorTypes'
// Composables
import { useColorClasses } from '@/composables/useColorClasses'
import { useIcon } from '@/composables/useIcon'

const {
  type = 'filled',
  messageVariant = 'info',
  message,
  title = '',
  withActions = false
} = defineProps<{
  type?: ModalType
  messageVariant?: ModalMessageVariant
  message: string
  title?: string
  withActions?: boolean
}>()

const modalIcon = computed(() => useIcon(messageVariant))
const modalBgClass = computed(() => {
  const textClass = useColorClasses({
    color: messageVariant,
    variant: 'text'
  })
  const bgClass = useColorClasses({ color: messageVariant, variant: 'background' })
  const ghostBgClass = useColorClasses({
    color: `custom-${messageVariant}` as BaseColor,
    variant: 'background'
  })
  const borderClass = useColorClasses({ color: messageVariant, variant: 'border' })

  switch (type) {
    case 'filled':
      return `${bgClass} text-white`
    case 'ghost':
      return `${ghostBgClass} ${textClass}`
    case 'outlined':
      return `border ${borderClass} ${textClass}`
    default:
      return bgClass
  }
})
const modalIconFillClass = computed(() => {
  const fillClass = useColorClasses({ color: messageVariant, variant: 'fill' })
  if (type === 'filled') {
    return 'fill-white'
  } else {
    return fillClass
  }
})
</script>

<template>
  <div :class="[modalBgClass]" class="flex justify-between rounded px-4 py-3 w-[320px]">
    <div class="flex gap-3">
      <component :is="modalIcon" :class="[modalIconFillClass]" class="min-w-[22px]" />
      <header class="flex flex-col gap-1">
        <h6 v-if="title" class="font-medium">
          {{ title }}
        </h6>
        <p>
          {{ message }}
        </p>
      </header>
    </div>
    <div class="flex gap-1" v-if="withActions">
      <p>confirm</p>
      <component :is="useIcon('close')" :class="[modalIconFillClass]" />
    </div>
  </div>
</template>

<style scoped></style>
