<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import guestIcon from '../icons/profileIcon.vue'
import googleIcon from '../icons/googleIcon.vue'
import twitterIcon from '../icons/twitterIcon.vue'
import facebookIcon from '../icons/facebookIcon.vue'


const router = useRouter()
const username = ref()
const password = ref()
const errMsg = ref()
const email = ref()

const reset = () => {
  password.value = ''
  username.value = ''
  // errMsg.value = '';
  email.value = ''
}

const Signup = () => {
  if (username.value != '' && email.value != '' && password.value != '') {
    router.push({ name: 'Home' })
  } else {
    errMsg.value = 'write something'
    reset()
  }
}

const useFacebook = () => {
    
  }
  
  const useTwitter = () => {
      
  }
  
  const useGoogle = () => {
  
  }
  
  const useGuest = () => {
      router.push({ name: 'Home' });
      
  };
</script>
<template>
  <div class="l-main">
    <form @submit.prevent="Signup()" class="l-form">
      <div class="input-wrapper">
        <input type="text" class="input-l" placeholder="penguin" v-bind="username" />
      </div>
      <div class="input-wrapper">
        <input type="email" class="input-l" placeholder="penguin@gmail.com" v-bind="email" />
      </div>
      <div class="input-wrapper">
        <input type="password" class="input-l" placeholder="***********" v-bind="password" />
      </div>
      <p>{{ errMsg }}</p>
      <button class="btn-l" type="submit">Signup</button>
    </form>
    <h5>or</h5>
    <div class="l-alternatives">
        <div class="alternative" @click="useGoogle">
            <googleIcon class="alternative-icon"/>
        </div>
        <div class="alternative" @click="useFacebook">
            <facebookIcon class="alternative-icon"/>
        </div>
        <div class="alternative" @click="useTwitter">
            <twitterIcon class="alternative-icon"/>
        </div>
        <div class="alternative" @click="useGuest">
            <guestIcon class="alternative-icon"/>
        </div>
    </div>
  </div>
</template>
<style>
@import '../style/authpage.css';
</style>

