<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import news from '../assets/news.png'

const router = useRouter();

const specific = () => {
  router.push({ name: 'Specific'})
}
</script>
<template>
  <div class="news-component">
    <div class="news-header">
      <h1>Trending news 🔥</h1>
    </div>
    <div class="news-banner" :style="{ backgroundImage: `url(${news})` }"  @click="specific()"></div>
    <div class="banner-info">
      <h1>nn</h1>
      <span>time</span>
    </div>
    <div class="news-list" >
      <div class="news-con" @click="specific()">
        <div class="news-image" :style="{ backgroundImage: `url(${news})` }"></div>
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
