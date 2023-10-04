<script setup lang="ts">
  import type {
    GroupButtonProps,
    GroupButtonSize,
    GroupButtonType,
  } from '@/types/GroupButtonTypes/GroupButtonsInterfaces';
  import { ref } from 'vue';
  import { useColorClasses } from '@/composables/useColorClasses';

  const {
    type = 'contained',
    size = 'medium',
    buttons,
  } = defineProps<{
    type?: GroupButtonType;
    size?: GroupButtonSize;
    buttons: GroupButtonProps[];
  }>();

  const sizes = {
    small: 'py-1 px-[13px]',
    medium: 'py-[7px] px-[22px]',
    large: 'py-2 px-[28px]',
  };
  const types = ref({
    contained: `${useColorClasses({ color: 'primary', variant: 'background' })} text-white`,
    outlined: `${useColorClasses({
      color: 'primary',
      variant: 'text',
    })}`,
    text: `${useColorClasses({ color: 'primary', variant: 'text' })} `,
  });
</script>

<template>
  <div class="rounded-md">
    <button
      v-for="buttonObj in buttons"
      :key="buttonObj.name"
      @click="buttonObj.clickHandler"
      :class="[
        sizes[size],
        types[type],
        {
          '!bg-actions-disabled-100 dark:!bg-actions-disabled-200 text-textCol-primary-200':
            !buttonObj.isActive,
          'hover:!bg-primary-resting-100 dark:hover:!bg-primary-resting-200': !buttonObj.isActive,
        },
      ]"
      class="first:rounded-l-md last:rounded-r-md"
    >
      {{ buttonObj.name }}
    </button>
  </div>
</template>

<style scoped></style>
