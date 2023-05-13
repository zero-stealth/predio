<script setup>
import { RouterLink } from 'vue-router';
import ExitIcon from "@/icons/ExitIcon.vue";
import { useRouteStore } from '@/stores/route';

const routeStore = useRouteStore();
</script>
<template>
  <div class="side-drawer">
    <div class="side-container">
      <ExitIcon class="icon icon-exit" @click="routeStore.toggleDrawer" />
    </div>
    <div class="inner-mobile">
      <div>
        <div class="nav-mobile">
          <div class="nav-wrapper-mobile">
            <RouterLink :to="{ name: 'home' }" class="nav-link nav-mobile-link">Home</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
@import "@/style/sidebar.css";
</style>
