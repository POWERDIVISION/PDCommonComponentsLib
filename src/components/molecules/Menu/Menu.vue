<script setup lang="ts">
  //vue
  import { ref, watch } from 'vue';
  // vueuse
  import { useLocalStorage, useWindowSize } from '@vueuse/core';
  import { vOnClickOutside } from '@vueuse/components';
  // components
  import BaseButton from '@/components/atoms/Button/BaseButton.vue';

  const {
    userInfo = {
      avatar: '',
      name: 'User',
    },
    showNav = false,
  } = defineProps<{
    userInfo?: {
      avatar?: string;
      name?: string;
    };
    showNav?: boolean;
  }>();
  const emits = defineEmits<{
    handleShowNav: [];
  }>();
  const { width } = useWindowSize();

  const mode = useLocalStorage('mode', 'dark');
  const rowsWidth = useLocalStorage('rowsWidth', '1280px');
  const fontSize = useLocalStorage('fontSize_setting', 12);

  const showUserDetails = ref(false);

  const handleModeChange = () => {
    if (mode.value === 'light') {
      mode.value = 'dark';
    } else {
      mode.value = 'light';
    }
  };
  const handleGrowRow = () => {
    if (rowsWidth.value === 'full') {
      rowsWidth.value = 'limited';
    } else {
      rowsWidth.value = 'full';
    }
  };
  const handleResizeFont = (type: 'increment' | 'decrement') => {
    if (type === 'increment') {
      fontSize.value = `${parseInt(fontSize.value) + 1}`;
    }
    if (type === 'decrement') {
      fontSize.value = `${parseInt(fontSize.value) - 1}`;
    }
  };
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };
  const handleCloseUserDetails = () => {
    showUserDetails.value = false;
  };

  watch(width, () => {
    if (width.value < 1572) {
      rowsWidth.value = 'full';
    }
  });
</script>

<template>
  <div class="flex justify-between p-1">
    <div class="flex gap-4 items-center">
      <BaseButton
        icon="menuOpen"
        type="contained"
        variant="icon_button"
        v-if="width <= 1280"
        @click="$emit('handleShowNav')"
      />
      <!--      display grow icon only when there is required width to change rows width -->
      <BaseButton
        icon="grow"
        type="contained"
        variant="icon_button"
        v-if="width > 1604"
        @click="handleGrowRow"
      />
      <BaseButton icon="search" type="contained" variant="icon_button" />
    </div>
    <div class="relative" v-on-click-outside="handleCloseUserDetails">
      <div class="flex">
        <BaseButton
          icon="darkMode"
          type="contained"
          variant="icon_button"
          class="hidden dark:block"
          @click="handleModeChange()"
        />
        <BaseButton
          icon="lightMode"
          type="contained"
          variant="icon_button"
          class="dark:hidden"
          @click="handleModeChange()"
        />
        <BaseButton icon="notification" type="contained" variant="icon_button" />

        <img
          :src="userInfo?.avatar"
          alt="user"
          v-if="userInfo?.avatar"
          class="w-[24px] h-[24px] m-auto rounded-full cursor-pointer"
          @click="showUserDetails = !showUserDetails"
        />
        <BaseButton
          icon="user"
          type="contained"
          variant="icon_button"
          v-else
          @click="showUserDetails = !showUserDetails"
        />
      </div>

      <div
        class="flex flex-col items-center absolute right-0 top-14 w-[200px] rounded-lg bg-bgCol-surface-100 dark:bg-bgCol-surface-200 z-20 shadow"
        v-show="showUserDetails"
      >
        <h4
          class="flex flex-col items-center justify-center p-2 pb-5 pt-5 border-b border-other-divider-100 dark:border-other-divider-200 w-full text-center text-xl"
        >
          <img
            :src="userInfo?.avatar"
            alt="user"
            v-if="userInfo?.avatar"
            class="w-[39px] h-[39px] rounded-full"
          />
          <BaseButton icon="user" type="contained" variant="icon_button" v-else />
          {{ userInfo.name }}
        </h4>
        <div
          class="flex flex-col items-center justify-center border-b hover:bg-primary-ghost-100 cursor-pointer border-other-divider-100 dark:border-other-divider-200 w-full"
        >
          <RouterLink class="flex gap-2 items-center" to="/settings">
            <BaseButton
              type="contained"
              variant="icon_button"
              icon="settings"
              class="cursor-pointer"
            />
            <span>Settings</span>
          </RouterLink>
        </div>
        <div
          class="flex flex-col pb-2 items-center justify-center border-b border-other-divider-100 dark:border-other-divider-200 w-full"
        >
          <div class="flex gap-2 items-center">
            <BaseButton
              type="contained"
              variant="icon_button"
              icon="minus"
              class="cursor-pointer"
              @click="handleResizeFont('decrement')"
            />
            <span class="cursor-default select-none">{{ fontSize }}</span>
            <BaseButton
              type="contained"
              variant="icon_button"
              icon="plus"
              class="cursor-pointer"
              @click="handleResizeFont('increment')"
            />
          </div>
          Font size
        </div>
        <div
          class="flex gap-2 items-center justify-center hover:bg-primary-ghost-100 rounded-b-md w-full cursor-pointer"
          @click="handleLogout"
        >
          <BaseButton icon="logout" type="contained" variant="icon_button" />
          Logout
        </div>
      </div>
    </div>
  </div>
</template>
