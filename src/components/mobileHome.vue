<script setup>
import FootballIcon from '../icons/footballIcon.vue'
import profileIcon from '../icons/profileIcon.vue'
import { useAuthStore } from '../stores/auth'
import pic from '../assets/basketball.png'
import { ref } from 'vue'

const greeting = ref('GoodMorning')
const authStore = useAuthStore()
const username = ref('user')
</script>
<template>
  <div class="background-layout">
    <!-- layout -->
  </div>
  <div class="m-home-container">
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
        <FootballIcon class="m-sport-icon" />
        <span>Football</span>
      </div>
      <div class="m-sport-link">
        <FootballIcon class="m-sport-icon" />
        <span>Football</span>
      </div>
      <div class="m-sport-link">
        <FootballIcon class="m-sport-icon" />
        <span>Football</span>
      </div>
      <div class="m-sport-link">
        <FootballIcon class="m-sport-icon" />
        <span>Football</span>
      </div>
      <div class="m-sport-link">
        <FootballIcon class="m-sport-icon" />
        <span>Football</span>
      </div>
      <div class="m-sport-link">
        <FootballIcon class="m-sport-icon" />
        <span>Football</span>
      </div>
      <div class="m-sport-link">
        <FootballIcon class="m-sport-icon" />
        <span>Football</span>
      </div>
      <div class="m-sport-link">
        <FootballIcon class="m-sport-icon" />
        <span>Football</span>
      </div>
    </div>
  </div>
</template>
<style>
@import '../style/mobileHome.css';
</style>
