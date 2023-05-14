<script setup>
import { ref  } from 'vue'
import { useRouter } from 'vue-router'
import MobileNav from '@/components/mobileNav.vue'
import DesktopNav from '@/components/desktopNav.vue'
import ProfileCard from '../components/profileCard.vue'

const router = useRouter()
const title = ref('Profile');

const settings = () => {
  router.push({ name: 'Settings' })
}

</script>
<template>
  <div class="details-container">
    <div class="desknav-layout">
      <DesktopNav class="desk-show" />
    </div>
    <div class="ds-contain">
      <ProfileCard />
    </div>
    <div class="ds-info">
        <h4>Nothing's here 😕   , click</h4> <span @click="settings()">settings</span>
    </div>
  </div>
  <div class="mobilenav-layout">
    <MobileNav />
  </div>
</template>
<style>
@import '../style/home.css';
@import '@/style/profile.css';
@import '../style/details.css';
@import '../style/specific.css';
</style>
