<script setup>
import { useThemeStore } from '@/stores/theme'
const themeStore = useThemeStore();

</script>
<template>
  <svg viewBox="0 0 24 24" v-if="themeStore.theme == 'light'">
    <path
      fill="currentColor"
      d="M12,18V6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,15.31L23.31,12L20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31Z"
    />
  </svg>
  <svg  viewBox="0 0 24 24" v-else>
    <path d="M2 12A10 10 0 0 0 15 21.54A10 10 0 0 1 15 2.46A10 10 0 0 0 2 12Z" />
  </svg>
</template>
