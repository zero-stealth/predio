<script setup>
import SettingIcon from '../icons/settingsIcon.vue'
import HomeIcon from '../icons/homeIcon.vue'
import DateIcon from '../icons/dateIcon.vue'
import PayIcon from '../icons/payIcon.vue'
import HotIcon from '../icons/hotIcon.vue'
import { RouterLink } from 'vue-router'
</script>
<template>
  <div class="mobile-container">
    <RouterLink :to="{ name: 'Home' }" class="mobile-link">
      <HomeIcon class="mobile-icon-link" />
    </RouterLink>
    <RouterLink :to="{ name: 'News' }" class="mobile-link">
      <HotIcon class="mobile-icon-link" />
    </RouterLink>
    <RouterLink :to="{ name: 'Upcoming' }" class="mobile-link">
      <DateIcon class="mobile-icon-link" />
    </RouterLink>
    <RouterLink :to="{ name: 'Pay' }" class="mobile-link">
      <PayIcon class="mobile-icon-link" />
    </RouterLink>
    <RouterLink :to="{ name: 'Settings' }" class="mobile-link">
      <SettingIcon class="mobile-icon-link" />
    </RouterLink>
  </div>
</template>
<style>
@import '../style/mobileNav.css';
</style>
