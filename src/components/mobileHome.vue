<script setup>
import { useRouter } from 'vue-router'
import payIcon from '../icons/payIcon.vue'
import VipIcon from '../icons/VipIcon.vue'
import golfIcon from '../icons/golfIcon.vue'
import menuIcon from '../icons/menuIcon.vue'
import rugbyIcon from '../icons/rugbyIcon.vue'
import { useRouteStore } from '../stores/route'
import hockeyicon from '../icons/hockeyicon.vue'
import tennisIcon from '../icons/tennisIcon.vue'
import FootballIcon from '../icons/footballIcon.vue'
import badmintonIcon from '../icons/badmintonIcon.vue'
import basketballIcon from '../icons/basketballIcon.vue'
import volleyballIcon from '../icons/volleyballIcon.vue'

import profileIcon from '../icons/profileIcon.vue'
import { useAuthStore } from '../stores/auth'
import pic from '../assets/basketball.png'
import { ref } from 'vue'

const greeting = ref('GoodMorning')
const routeStore = useRouteStore();
const authStore = useAuthStore()
const username = ref('guest')
const router = useRouter()

const PayPage = () => {
  router.push({ name: 'Pay' })
}
</script>
<template>
  <div class="background-layout">
    <!-- layout -->
  </div>
  <div class="m-home-container">
    <div class="m-home-menu">
      <menuIcon class="menu-icon" @click="routeStore.toggleDrawer" />
    </div>
    <div class="m-home-nav">
      <div class="m-home-greeting">
        <h1>{{ greeting }},</h1>
        <h2>{{ username }}</h2>
      </div>
      <div class="m-home-profile">
        <div class="m-home-p-icon" v-if="authStore.isAuthenticated == false">
          <profileIcon class="m-home-profile-icon" />
        </div>
        <div :style="{ backgroundImage: `url(${pic})` }" class="m-home-p-img" v-else>
          <!-- profile image -->
        </div>
      </div>
    </div>
    <div class="m-sport-selection">
      <div class="m-sport-link">
        <FootballIcon class="m-sport-icon" />
        <span>Football</span>
      </div>
      <div class="m-sport-link">
        <badmintonIcon class="m-sport-icon" />
        <span>Badminton</span>
      </div>
      <div class="m-sport-link">
        <basketballIcon class="m-sport-icon" />
        <span>Basketball</span>
      </div>
      <div class="m-sport-link">
        <golfIcon class="m-sport-icon" />
        <span>Golf</span>
      </div>
      <div class="m-sport-link">
        <rugbyIcon class="m-sport-icon" />
        <span>Rugby</span>
      </div>
      <div class="m-sport-link">
        <hockeyicon class="m-sport-icon" />
        <span>Hockey</span>
      </div>
      <div class="m-sport-link">
        <tennisIcon class="m-sport-icon" />
        <span>Tennis</span>
      </div>
      <div class="m-sport-link">
        <VipIcon class="m-sport-icon" @click="PayPage()" />
        <span>Vip plan</span>
      </div>
      <div class="m-sport-link">
        <payIcon class="m-sport-icon" @click="PayPage()" />
        <span>How to pay</span>
      </div>
      <div class="m-sport-link">
        <volleyballIcon class="m-sport-icon" />
        <span>Volleyball</span>
      </div>
    </div>
  </div>
</template>
<style>
@import '../style/mobileHome.css';
</style>
