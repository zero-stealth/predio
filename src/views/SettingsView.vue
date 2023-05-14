<script setup>
import ProfileCard from '@/components/profileCard.vue'
import SettingCard from '@/components/settingCard.vue'
import desktopNav from '@/components/desktopNav.vue'
import mobileNav from '@/components/mobileNav.vue'
</script>
<template>
    <div class="desknav-layout">
      <desktopNav class="desk-show" />
    </div>
    <div class="settings-container">
    <div class="s-view-contain">
      <div class="s-view1">
        <SettingCard />
      </div>
      <div class="s-view2">
        <ProfileCard />
      </div>
    </div>
  </div>
  <div class="mobilenav-layout">
    <mobileNav />
  </div>
</template>
<style>
@import '../style/home.css';
@import '@/style/settings.css';
</style>
