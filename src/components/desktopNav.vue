<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import ModeIcon from '../icons/mode.vue'
import pic from '../assets/basketball.png'
import homeIcon from '../icons/homeIcon.vue'
import { useAuthStore } from '../stores/auth'
import { useThemeStore } from '../stores/theme'
import SearchIcon from '../icons/searchIcon.vue'
import profileIcon from '../icons/profileIcon.vue'
import SettingIcon from '../icons/settingsIcon.vue'
import FootballIcon from '../icons/footballIcon.vue'
import badmintonIcon from '../icons/badmintonIcon.vue'
import basketballIcon from '../icons/basketballIcon.vue'
import payIcon from '../icons/payIcon.vue'
import VipIcon from '../icons/VipIcon.vue'
import golfIcon from '../icons/golfIcon.vue'
import rugbyIcon from '../icons/rugbyIcon.vue'
import hockeyicon from '../icons/hockeyicon.vue'
import tennisIcon from '../icons/tennisIcon.vue'
import volleyballIcon from '../icons/volleyballIcon.vue'

const authStore = useAuthStore()
const themeStore = useThemeStore()
const username = ref('guest')
const router = useRouter()

const SettingsPage = () => {
  router.push({ name: 'Settings' })
}

const PayPage = () => {
  router.push({ name: 'Pay' })
}

const homePage = () => {
  router.push({ name: 'Home' })
}

const getData = () => {
  homePage()
}
</script>
<template>
  <div class="desk-container">
    <div class="desk-profile">
      <div class="desk-p-icon" v-if="authStore.isAuthenticated == false">
        <profileIcon class="profile-icon" />
      </div>
      <div :style="{ backgroundImage: `url(${pic})` }" class="desk-p-img" v-else>
        <!-- profile image -->
      </div>
      <!-- <img :src="pic" alt="profile-img" class="desk-p-img" /> -->
      <span>{{ username }}</span>
    </div>
    <div class="sport-selection">
      <div class="sport-wrapper" @click="homePage()">
        <homeIcon class="desk-icon" />
        <span>Home</span>
      </div>
      <div class="sport-wrapper" @click="getData()">
        <FootballIcon class="desk-icon" />
        <span>Football</span>
      </div>
      <div class="sport-wrapper" @click="PayPage()">
        <VipIcon class="desk-icon" />
        <span>Vip</span>
      </div>
      <div class="sport-wrapper" @click="getData()">
        <badmintonIcon class="desk-icon" />
        <span>Badminton</span>
      </div>
      <div class="sport-wrapper" @click="PayPage">
        <payIcon class="desk-icon" />
        <span>Pay</span>
      </div>
      <div class="sport-wrapper" @click="getData()">
        <basketballIcon class="desk-icon" />
        <span>Basketball</span>
      </div>
      <div class="sport-wrapper" @click="getData()">
        <golfIcon class="desk-icon" />
        <span>Golf</span>
      </div>
      <div class="sport-wrapper" @click="getData()">
        <rugbyIcon class="desk-icon" />
        <span>Rugby</span>
      </div>
      <div class="sport-wrapper" @click="getData()">
        <hockeyicon class="desk-icon" />
        <span>Hockey</span>
      </div>
      <div class="sport-wrapper" @click="getData()">
        <tennisIcon class="desk-icon" />
        <span>Tennis</span>
      </div>
      <div class="sport-wrapper" @click="getData()">
        <volleyballIcon class="desk-icon" />
        <span>Volleyball</span>
      </div>
    </div>
    <div class="nav-selection" @click="SettingsPage()">
      <SettingIcon class="desk-icon" />
      <div
        class="color-mode-wrapper"
        @click="themeStore.toggleTheme()"
        :class="[themeStore.theme == 'dark' ? 'dark' : 'light']"
      >
        <div class="color-mode">
          <ModeIcon class="desk-icon" />
        </div>
        <span>
          {{ themeStore.theme }}
        </span>
      </div>
    </div>
  </div>
</template>
<style>
@import '../style/desktopNav.css';
</style>
