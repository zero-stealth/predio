<script setup>
import desktopNav from '@/components/desktopNav.vue'
import mobileNav from '@/components/mobileNav.vue'
</script>
<template>
  <div>
    <div class="desknav-layout">
      <desktopNav class="desk-show" />
    </div>
  </div>
  <div class="mobilenav-layout">
    <mobileNav />
  </div>
</template>
<style></style>
