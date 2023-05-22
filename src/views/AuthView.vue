<script setup>
import football from '../assets/football.png';
import { useAuthStore } from '../stores/auth';
import LoginPage from '../components/login.vue';
import SignupPage from '../components/Signup.vue';
import { ref, shallowRef, watchEffect } from 'vue';

const defaultPage = shallowRef(LoginPage);
const defaultImage = ref(football);
const authStore = useAuthStore();
const pageName = ref();
const images = [
  {
    image: football,
  },
];

setInterval(() => {
  defaultImage.value = images[Math.floor(Math.random() * images.length)].image;
}, 30000);

watchEffect(() => {
  pageName.value = authStore.resetPage === false ? 'Login' : 'Reset';
});

const setSignup = () => {
  defaultPage.value = SignupPage;
};

const setLogin = () => {
  defaultPage.value = LoginPage;
};
</script>

<template>
  <div class="background-layout" :class="[defaultPage === LoginPage ? 'flip' : 'flop']">
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
          @click="setSignup"
          :class="[defaultPage === SignupPage ? 'active' : 'dull']"
        >
          Signup
        </button>
        <button
          class="auth-btn"
          @click="setLogin"
          :class="[defaultPage === LoginPage ? 'active' : 'dull']"
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
