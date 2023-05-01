<script setup>
import desktopNav from '../components/desktopNav.vue'
import mobileHome from '../components/mobileHome.vue'
import mobileNav from '../components/mobileNav.vue'
import gamePanel from '../components/gamePanel.vue'
import league from '../components/league.vue'
import adpanel from '../components/adPanel.vue'
import news from '../components/news.vue'
</script>
<template>
  <div class="home-container">
    <div class="desknav-layout">
      <desktopNav class="desk-show" />
      <div class="mobile-show">
        <mobileHome />
      </div>
    </div>
    <div class="layout">
      <div class="league-layout">
        <league />
      </div>
      <div class="main-layout">
        <div class="desk-show">
          <adpanel />
        </div>
        <gamePanel />
      </div>
      <div class="news-layout">
        <news />
      </div>
    </div>
    <!-- <div class="mobilenav-layout">
    <mobileNav />
  </div> -->
  </div>
</template>
<style>
@import '../style/home.css';
</style>
