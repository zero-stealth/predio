<script setup>
import { useRouter } from 'vue-router'
import FavIcon from '../icons/likeIcon.vue'
// import ShopIcon from '../icons/shopIcon.vue'
import ArrowIcon from '@/icons/ArrowIcon.vue'
import LogoutIcon from '@/icons/logoutIcon.vue'
import mobileNav from '@/components/mobileNav.vue'
import ProfileIcon from '@/icons/profileIcon.vue'

const router = useRouter()

const Profile = () => {
  router.push({ name: 'Profile' })
}

const Favourite = () => {
  router.push({ name: 'Favourite' })
}

const Logout = () => {
  router.push({ name: 'Splash' })
}
</script>
<template>
  <div class="set-card">
    <div class="container-set" @click="Profile()">
      <div class="wrapper-icon-set">
        <div class="icon-set">
          <ProfileIcon class="set-icon" />
        </div>
        <span>My Profile</span>
      </div>
      <ArrowIcon class="set-arrow" />
    </div>
    <!-- <div class="container-set" @click="Order()">
      <div class="wrapper-icon-set">
        <div class="icon-set">
          <ShopIcon class="set-icon" />
        </div>
        <span>Order history</span>
      </div>
      <ArrowIcon class="set-arrow" />
    </div> -->
    <div class="container-set"  @click="Favourite()">
      <div class="wrapper-icon-set">
        <div class="icon-set">
          <FavIcon class="set-icon" />
        </div>
        <span>Favorites </span>
      </div>
      <ArrowIcon class="set-arrow" />
    </div>
    <div class="container-set" @click="Logout()">
      <div class="wrapper-icon-set">
        <div class="icon-set">
          <LogoutIcon class="set-icon" />
        </div>
        <span>logout</span>
      </div>
      <ArrowIcon class="set-arrow" />
    </div>
  </div>
  <div class="mobilenav-layout">
    <mobileNav />
  </div>
</template>
<style>
@import '@/style/home.css';
@import '@/style/settingsCard.css';
</style>
