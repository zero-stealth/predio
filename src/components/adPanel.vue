<script setup>
import banner from '../assets/banner.jpg'
import player from '../assets/player.png'

const getApp = () => {}
</script>
<template>
  <div class="ad-container" :style="{ backgroundImage: `url(${banner})` }">
    <div class="ad-info">
      <h1>Download use our app</h1>
      <p>Get an even better experience with our mobile app 🌟</p>
      <button @click="getApp()" class="ad-btn">Download app</button>
    </div>
    <div class="ad-img" :style="{ backgroundImage: `url(${player})` }">
    </div>
  </div>
</template>
<style>
@import '../style/adPanel.css';
</style>
