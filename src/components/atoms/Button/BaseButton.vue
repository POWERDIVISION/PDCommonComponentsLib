<script setup lang="ts">
  import { computed, ref } from 'vue';

  import { useColorClasses } from '../../../composables/useColorClasses';

  import { useIcon } from '../../../composables/useIcon';

  import type {
    BaseButtonType,
    BaseButtonVariant,
    ButtonColor,
    ButtonSize,
  } from '../../../types/ButtonTypes/ButtonsInterfaces';

  const {
    type,
    variant = 'default',
    color = 'default',
    size = 'medium',
    disabled = false,
    icon = 'plus',
  } = defineProps<{
    type: BaseButtonType;
    variant?: BaseButtonVariant;
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

  const round_sizes = {
    small: '!p-2',
    medium: '!p-3',
    large: '!p-4',
  };

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
    fab_extended: 'rounded-3xl',
    fab_round: `!rounded-full ${round_sizes[size]}`,
    icon_button: `!rounded-full ${round_sizes[size]} !bg-transparent !hover:bg-transparent !focus:bg-transparent`,
  });
  const variantClass = computed(() => variants.value[variant]);

  const iconFill = computed(() => `${useColorClasses({ color, variant: 'fill' })}`);
  const iconFillClass = computed(() => (variant === 'icon_button' ? iconFill.value : 'fill-white'));

  const iconSize = ref({
    small: 'w-5 h-5',
    medium: 'w-6 h-6',
    large: 'w-8 h-8',
  });

  const iconSizeClass = computed(() => (variant === 'icon_button' ? iconSize.value[size] : ''));

  const disableClass = computed(() =>
    disabled ? '!bg-actions-disabled-100 dark:!bg-actions-disabled-200 cursor-not-allowed' : '',
  );
  const disableFabExtendedClass = computed(() =>
    disabled && (variant === 'fab_extended' || variant === 'fab_round' || variant === 'icon_button')
      ? '!text-textCol-disabled-100 dark:!text-textCol-disabled-200 !fill-textCol-disabled-100 dark:!fill-textCol-disabled-200 cursor-auto'
      : '',
  );
</script>

<template>
  <button
    :class="[
      typeClass,
      sizeClass,
      variantClass,
      disableClass,
      disableFabExtendedClass,
      {
        'flex-row-reverse': variant === 'left_icon',
      },
    ]"
    class="flex items-center justify-center gap-2 rounded"
  >
    <span v-if="variant !== 'icon_button' && variant !== 'fab_round'">
      <slot />
    </span>
    <component
      :is="useIcon(icon)"
      v-if="variant !== 'default'"
      :class="[iconFillClass, iconSizeClass, disableFabExtendedClass]"
      class="group-hover:fill-white group-hover:bg-primary-main-100 group-hover:rounded-full"
    />
  </button>
</template>

<style scoped></style>
