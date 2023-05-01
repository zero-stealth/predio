<script setup>
import { ref } from 'vue'
import pic from '@/assets/basketball.png'
</script>
<template>
  <div class="news-component">
    <div class="news-header">
      <h1>Trending news 🔥</h1>
    </div>
    <div class="news-banner" :style="{ backgroundImage: `url(${pic})` }"></div>
    <div class="banner-info">
      <h1>nn</h1>
      <span>time</span>
    </div>
    <div class="news-list">
      <div class="news-con">
        <div class="news-image" :style="{ backgroundImage: `url(${pic})` }"></div>
        <div class="news-i-info">
          <h1>ss</h1>
          <span>time</span>
        </div>
      </div>
      
    </div>
  </div>
</template>
<style>
@import '../style/news.css';
</style>
