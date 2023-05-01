<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import ModeIcon from '../icons/mode.vue'
import pic from '../assets/basketball.png'
import { useAuthStore } from '../stores/auth'
import SearchIcon from '../icons/searchIcon.vue'
import profileIcon from '../icons/profileIcon.vue'
import SettingIcon from '../icons/settingsIcon.vue'
import FootballIcon from '../icons/footballIcon.vue'

const authStore = useAuthStore();
const modeType = ref('light');
const username = ref('user');
const router = useRouter();

const changeColor = () => {
  switch (modeType.value) {
    case 'light':
      modeType.value = 'dark'
      break
    case 'dark':
      modeType.value = 'light'
      break
    default:
      break
  }
}

const SearchPage = () => {
    router.push({ name: "Search" });
}

const SettingsPage = () => {
    router.push({ name: "Settings" });
}
</script>
<template>
  <div class="desk-container">
    <div class="desk-profile">
        <div class="desk-p-icon" v-if="authStore.isAuthenticated == false" >
            <profileIcon class="profile-icon"/>
        </div>
      <div :style="{ backgroundImage: `url(${pic})` }" class="desk-p-img" v-else>
        <!-- profile image -->
      </div>
      <!-- <img :src="pic" alt="profile-img" class="desk-p-img" /> -->
      <span>{{ username }}</span>
    </div>
    <div class="sport-selection">
      <div class="sport-wrapper">
        <FootballIcon class="desk-icon" />
        <span>Football</span>
      </div>
      <div class="sport-wrapper">
        <FootballIcon class="desk-icon" />
        <span>Football</span>
      </div>
      <div class="sport-wrapper">
        <FootballIcon class="desk-icon" />
        <span>Football</span>
      </div>

      <div class="sport-wrapper">
        <FootballIcon class="desk-icon" />
        <span>Football</span>
      </div>
      <div class="sport-wrapper">
        <FootballIcon class="desk-icon" />
        <span>Football</span>
      </div>
      <div class="sport-wrapper">
        <FootballIcon class="desk-icon" />
        <span>Football</span>
      </div>
      <div class="sport-wrapper">
        <FootballIcon class="desk-icon" />
        <span>Football</span>
      </div>
      <div class="sport-wrapper">
        <FootballIcon class="desk-icon" />
        <span>Football</span>
      </div>
      <div class="sport-wrapper">
        <FootballIcon class="desk-icon" />
        <span>Football</span>
      </div>
      <div class="sport-wrapper">
        <FootballIcon class="desk-icon" />
        <span>Football</span>
      </div>
      <div class="sport-wrapper">
        <FootballIcon class="desk-icon" />
        <span>Football</span>
      </div>
      <div class="sport-wrapper">
        <FootballIcon class="desk-icon" />
        <span>Football</span>
      </div>
      <div class="sport-wrapper">
        <FootballIcon class="desk-icon" />
        <span>Football</span>
      </div>
      <div class="sport-wrapper">
        <FootballIcon class="desk-icon" />
        <span>Football</span>
      </div>
      <div class="sport-wrapper">
        <FootballIcon class="desk-icon" />
        <span>Football</span>
      </div>
      <div class="sport-wrapper">
        <FootballIcon class="desk-icon" />
        <span>Football</span>
      </div>
      <div class="sport-wrapper">
        <FootballIcon class="desk-icon" />
        <span>Football</span>
      </div>
    </div>
    <div class="nav-selection">
      <SearchIcon class="desk-icon" @click="SearchPage()" />
      <SettingIcon class="desk-icon"  @click="SettingsPage()"  />
      <div
        class="color-mode-wrapper"
        @click="changeColor()"
        :class="[modeType == 'light' ? 'light' : 'dark']"
      >
        <div class="color-mode">
          <ModeIcon class="desk-icon" />
        </div>
        <span>
          {{ modeType }}
        </span>
      </div>
    </div>
  </div>
</template>
<style>
@import '../style/desktopNav.css';
</style>
