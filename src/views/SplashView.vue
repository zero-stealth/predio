<script setup>
import { watchEffect, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import circleIcon from '../icons/circleIcon.vue'

const authStore = useAuthStore()
const router = useRouter();
const interval = ref(null);

watchEffect(() => {
  interval.value = authStore.timeOut;
  switch (interval.value) {
    case 3000:
      setTimeout(() => {
        router.push({ name: "Auth" });
      }, interval.value);
      break;
      case 0:
        router.push({ name: "Auth" });
      break;
    default:
      break;
  }
});
</script>
<template>
  <div class="splash">
    <circleIcon class="circle-icon"/>
  </div>
</template>
<style>
@import '@/style/splash.css';
</style>
