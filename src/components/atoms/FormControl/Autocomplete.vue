<script setup lang="ts">
  import { computed, ref } from 'vue';

  import { vOnClickOutside } from '@vueuse/components';

  import type {
    AutocompleteItem,
    AutocompleteSize,
    AutocompleteType,
  } from '@/types/FormTypes/AutocompleteTypes/AutocompleteInterface';

  import Chip from '@/components/atoms/Chip/Chip.vue';
  import BaseButton from '@/components/atoms/Button/BaseButton.vue';

  const modelValue = defineModel();

  const {
    type,
    items,
    single = true,
    size = 'medium',
    placeholder = '',
    label = '',
    disable = false,
  } = defineProps<{
    type: AutocompleteType;
    items: AutocompleteItem[];
    single?: boolean;
    size?: AutocompleteSize;
    placeholder?: string;
    label?: string;
    disable?: boolean;
  }>();

  const sizesContained = { small: 'pt-4 pb-1', medium: 'pt-5 pb-2' };
  const sizesOutlined = { small: 'py-2 px-4', medium: 'py-4 px-4' };
  const sizesText = { small: 'py-3 px-3', medium: 'py-4 px-3' };
  const sizeClass = computed(() => {
    switch (type) {
      case 'standard':
        return sizesContained[size];
      case 'outlined':
        return sizesOutlined[size];
      case 'text':
        return sizesText[size];
      default:
        return sizesContained['medium'];
    }
  });
  const borderType = computed(() => {
    switch (type) {
      case 'standard':
        return 'border-b border-bCol-light dark:border-bCol-dark';
      case 'outlined':
        return `border border-bCol-light dark:border-bCol-dark rounded-lg`;
      case 'text':
        return 'border-b rounded-t-lg border-bCol-light dark:border-bCol-dark';
      default:
        return 'border-b border-bCol-light dark:border-bCol-dark';
    }
  });

  const isOpen = ref(false);
  const showMoreOptionsSelected = ref(false);

  const labelClass = computed(() => {
    switch (type) {
      case 'standard':
        return 'top-0 left-0';
      case 'outlined':
        return '-top-[6px] left-3 px-1 bg-light-surface dark:bg-dark-surface';
      case 'text':
        return 'top-0 left-3';
    }
  });

  const searchOptions = ref('');
  const cloneOptions = computed(() => {
    return items.filter((item: AutocompleteItem) => {
      return item.value.toLowerCase().includes(searchOptions.value.toLowerCase());
    });
  });

  const toggleOpen = () => {
    if (disable) return;
    isOpen.value = true;
    showMoreOptionsSelected.value = true;
  };
  const toggleClose = () => {
    isOpen.value = false;
    showMoreOptionsSelected.value = false;
  };
  const toggleOpenValue = () => {
    if (disable) return;
    isOpen.value = !isOpen.value;
    showMoreOptionsSelected.value = !showMoreOptionsSelected.value;
  };

  const addToModelValue = (item: AutocompleteItem) => {
    if (single) {
      modelValue.value = item;
    } else {
      //   check if this item is already in the modelValue
      const index = modelValue.value.findIndex((i: AutocompleteItem) => i.id === item.id);
      //   if yes, remove it
      if (index !== -1) {
        modelValue.value.splice(index, 1);
      } else {
        //   if no, add it
        modelValue.value.push(item);
      }
      toggleClose();
    }
  };
  const handleRemoveItem = id => {
    const index = modelValue.value.findIndex((i: AutocompleteItem) => i.id === id);
    if (index !== -1) {
      modelValue.value.splice(index, 1);
    }
  };

  const clearAllOptions = () => {
    modelValue.value = [];
  };
</script>

<template>
  <div
    class="group flex flex-col items-center relative text-tCol-light-primary dark:text-tCol-dark-primary transition-all w-[300px] min-w-fit"
    v-on-click-outside="toggleClose"
  >
    <div
      :class="[
        sizeClass,
        borderType,
        {
          'bg-transparent': type !== 'text',
          'bg-light-top dark:bg-dark-top': type === 'text',
          'border-dashed': disable,
          '!bg-disabledCol-100': disable && type === 'text',
          'pb-5': modelValue.length > 1 && !showMoreOptionsSelected,
        },
      ]"
      class="w-full max-w-full truncate flex gap-1 outline-none min-h-[44px] cursor-pointer"
    >
      <input
        v-model="searchOptions"
        :disabled="disable"
        class="min-w-[100px] bg-transparent outline-none"
        @focusin="toggleOpen"
        placeholder="Value"
      />
      <span v-if="single">
        {{ modelValue?.value || placeholder }}
      </span>
      <div
        class="relative flex flex-col gap-1"
        :class="{
          'h-[34px]': !showMoreOptionsSelected,
        }"
      >
        <Chip
          v-if="!single"
          v-for="(selected, key) in modelValue"
          :key="selected.id"
          type="outlined"
          variant="removable"
          size="small"
          @remove-item="handleRemoveItem(selected.id)"
          :class="{
            hidden: !showMoreOptionsSelected && key !== 0,
          }"
        >
          {{ selected.value }}
        </Chip>
        <div
          v-if="!showMoreOptionsSelected && modelValue.length > 1"
          class="absolute -bottom-6 w-full left-0 rounded-b-lg z-10"
          :class="{
            'bg-light-surface dark:bg-dark-surface': type === 'outlined',
            'bg-light-top dark:bg-dark-top': type === 'text',
          }"
        >
          + {{ modelValue.length - 1 }} selected
        </div>
      </div>
      <BaseButton
        type="contained"
        variant="icon_button"
        icon="close"
        size="small"
        class="!p-0"
        color="secondary"
        @click="clearAllOptions"
      />
      <BaseButton
        type="contained"
        variant="icon_button"
        icon="arrowDownFilled"
        size="small"
        class="!p-0"
        color="secondary"
        @click="toggleOpenValue"
      />
    </div>
    <span
      v-if="label"
      class="absolute uppercase text-[10px] font-medium transition-all select-none"
      :class="[
        labelClass,
        {
          'text-tCol-light-primary dark:text-tCol-dark-primary group-hover:text-primary':
            !isOpen && !disable,
          'text-primary': isOpen,
          'text-tCol-light-secondary dark:text-tCol-dark-secondary': !isOpen,
          '!text-tCol-disabled': disable,
        },
      ]"
      >{{ label }}</span
    >
    <div
      class="absolute w-full bg-light-top dark:bg-dark-top top-full flex flex-col rounded-md transition-all"
      :class="{
        'opacity-0 hidden ': !isOpen,
      }"
    >
      <span
        v-for="item in cloneOptions"
        :key="item.id"
        @click="addToModelValue(item)"
        class="p-1 px-2 cursor-pointer transition-all first:rounded-t-md last:rounded-b-md"
        :class="{
          'bg-ghostCol-primary-100 text-tCol-light-secondary': single
            ? modelValue?.id === item.id
            : modelValue.findIndex((i: AutocompleteItem) => i.id === item.id) !== -1,
          'hover:bg-light-surface dark:hover:bg-dark-surface': single
            ? modelValue?.id !== item.id
            : modelValue.findIndex((i: AutocompleteItem) => i.id === item.id) === -1,
        }"
        >{{ item.value }}</span
      >
    </div>
  </div>
</template>

<style scoped></style>
