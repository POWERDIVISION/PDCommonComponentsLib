<script setup lang="ts">
  const { isWhite } = defineProps<{
    isWhite?: boolean;
  }>();
</script>

<template>
  <div id="container" class="m-auto flex items-center justify-center">
    <div
      id="loader"
      class="border-black dark:border-white"
      :class="{ 'border-white': isWhite ? isWhite : '' }"
    ></div>
  </div>
</template>

<style scoped>
  #container {
    width: 70px;
    height: 35px;
    overflow: hidden;
    top: calc(50% - 17px);
    left: calc(50% - 35px);
  }
  #loader {
    width: 24px;
    height: 24px;
    border-style: solid;
    border-left-color: transparent;
    border-bottom-color: transparent;
    border-radius: 50%;
    box-sizing: border-box;
    animation: rotate 2s ease-in-out infinite alternate-reverse;
  }
  @keyframes rotate {
    0% {
      border-width: 2px;
      transform: rotate(-360deg);
    }
    100% {
      transform: rotate(720deg);
      border-width: 2px;
    }
  }
</style>
