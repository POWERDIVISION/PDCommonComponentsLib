<script setup lang="ts" generic="T">
import { computed } from 'vue'
// types
import type { ChipColor, ChipSize, ChipType, ChipVariant } from '@/types/ChipTypes/ChipInterface'
// composables
import { useColorClasses } from '@/composables/useColorClasses'
import { useIcon } from '@/composables/useIcon'

const {
  type,
  color = 'default',
  variant = 'default',
  size = 'medium',
  disabled = false,
  icon = 'user'
} = defineProps<{
  type: ChipType
  color?: ChipColor
  variant?: ChipVariant
  size?: ChipSize
  disabled?: boolean
  icon?: string
}>()

defineEmits<{
  RemoveItem: (value: T) => void
}>()

// sizes
const sizes = {
  small: 'py-1 px-3',
  medium: 'py-2 px-3'
}
const sizeWithRemovable = {
  small: 'py-1 pr-1 pl-3',
  medium: 'py-2 pr-2 pl-3'
}
const sizeWithThumbnail = {
  small: 'py-1 pr-2 pl-1',
  medium: 'py-2 pr-3 pl-2'
}
const sizeWithBoth = {
  small: 'py-1 px-2',
  medium: 'py-2 px-2'
}
// size computed
const sizeClass = computed(() => {
  switch (variant) {
    case 'removable':
      return sizeWithRemovable[size]
    case 'thumbnail':
      return sizeWithThumbnail[size]
    case 'removable_thumbnail':
      return sizeWithBoth[size]
    default:
      return sizes[size]
  }
})

// colors
const chipBackgroundColor = useColorClasses({
  color,
  variant: 'background'
})
const chipBorderColor = useColorClasses({
  color,
  variant: 'border'
})
// colors computed
const iconFillColor = computed(() => {
  if (type === 'filled' && color === 'default') {
    return 'fill-black'
  } else {
    return useColorClasses({
      color,
      variant: 'fill'
    })
  }
})
const textColor = computed(() => {
  if (type !== 'filled') {
    return useColorClasses({
      color,
      variant: 'text'
    })
  } else if (type === 'filled' && color === 'default') {
    // for default filled type, text color is white
    return useColorClasses({
      color: 'white',
      variant: 'text'
    })
  } else {
    return 'text-white'
  }
})
</script>

<template>
  <span
    :class="[
      sizeClass,
      chipBackgroundColor,
      chipBorderColor,
      {
        'border bg-transparent': type === 'outlined',
        'opacity-50 cursor-auto': disabled
      }
    ]"
    class="flex gap-2 w-fit rounded-3xl select-none"
  >
    <component
      :is="useIcon(icon)"
      v-if="variant === 'thumbnail' || variant === 'removable_thumbnail'"
      :class="[
        iconFillColor,
        {
          '!fill-white': color !== 'default' && type === 'filled'
        }
      ]"
    />
    <p :class="[textColor]">
      <slot />
    </p>

    <component
      :is="useIcon('circleClose')"
      v-if="variant === 'removable' || variant === 'removable_thumbnail'"
      :class="[
        iconFillColor,
        {
          '!fill-white': color !== 'default' && type === 'filled'
        }
      ]"
      @click="$emit('RemoveItem')"
    />
  </span>
</template>

<style scoped></style>
