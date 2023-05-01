<script setup>
import football from '../assets/football.png'
import { useAuthStore } from '../stores/auth'
import loginPage from '../components/login.vue'
import SignupPage from '../components/Signup.vue'
import { ref, shallowRef, watchEffect } from 'vue'

const defaultPage = shallowRef(loginPage)
const defaultImage = ref(football)
const authStore = useAuthStore()
const pageName = ref()
let images = ref([])

// change background image every 30 sec
images = [
  {
    image: football
  }
]

setInterval(() => {
  defaultImage.value = images[Math.floor(Math.random() * images.length)].image
}, 30000)

watchEffect(() => {
  if (authStore.resetPage == false) {
    pageName.value = 'Login'
  } else {
    pageName.value = 'Reset'
  }
})
const setSignup = () => {
  defaultPage.value = SignupPage
}

const setLogin = () => {
  defaultPage.value = loginPage
}
</script>
<template>
  <div class="background-layout" :class="[defaultPage == loginPage ? 'flip' : 'flop']">
    <!-- layout -->
  </div>
  <div class="auth-main">
    <div class="auth-img" :style="{ backgroundImage: `url(${defaultImage})` }">
      <!-- image  -->
    </div>
    <div class="auth-info">
      <div class="auth-type">
        <button
          class="auth-btn"
          @click="setSignup()"
          :class="[defaultPage == SignupPage ? 'active' : 'dull']"
        >
          Signup
        </button>
        <button
          class="auth-btn"
          @click="setLogin()"
          :class="[defaultPage == loginPage ? 'active' : 'dull']"
        >
          {{ pageName }}
        </button>
      </div>
      <component :is="defaultPage" />
    </div>
  </div>
</template>
<style>
@import '../style/auth.css';
</style>
