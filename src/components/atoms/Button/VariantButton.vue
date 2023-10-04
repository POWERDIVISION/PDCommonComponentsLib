<script setup lang="ts">
  import { computed, ref } from 'vue';

  import { useColorClasses } from '@/composables/useColorClasses';
  import { useIcon } from '@/composables/useIcon';

  import type {
    ButtonColor,
    ButtonSize,
    VariantButtonType,
    VariantButtonVariant,
  } from '@/types/ButtonTypes/ButtonsInterfaces';

  const {
    type,
    variant = 'default',
    color = 'primary',
    size = 'medium',
    disabled = false,
    icon = 'plus',
  } = defineProps<{
    type: VariantButtonType;
    variant?: VariantButtonVariant;
    color?: ButtonColor;
    size?: ButtonSize;
    disabled?: boolean;
    icon?: string;
  }>();

  const sizes = {
    small: 'py-1 px-[13px]',
    medium: 'py-[7px] px-[22px]',
    large: 'py-2 px-[28px]',
  };
  const sizeClass = sizes[size];

  const types = ref({
    contained: `${useColorClasses({ color, variant: 'background' })} text-white`,
    outlined: `border ${useColorClasses({ color, variant: 'border' })} ${useColorClasses({
      color,
      variant: 'text',
    })}`,
    text: `${useColorClasses({ color, variant: 'text' })}`,
  });
  const typeClass = computed(() => types.value[type]);

  const variants = ref({
    default: 'rounded',
    left_icon: 'rounded',
    right_icon: 'rounded',
  });
  const variantClass = computed(() => variants.value[variant]);

  const disableClass = computed(() =>
    disabled
      ? '!text-textCol-disabled-100 dark:!text-textCol-disabled-200 !border-actions-disabled-100 dark:!border-actions-disabled-200 cursor-not-allowed'
      : '',
  );
</script>

<template>
  <button
    :class="[
      typeClass,
      sizeClass,
      disableClass,
      variantClass,
      {
        'flex-row-reverse': variant === 'left_icon',
      },
    ]"
    class="flex items-center gap-2 rounded"
  >
    <slot />
    <component
      :is="useIcon(icon)"
      v-if="variant !== 'default'"
      :class="[useColorClasses({ color, variant: 'fill' })]"
    />
  </button>
</template>

<style scoped></style>
