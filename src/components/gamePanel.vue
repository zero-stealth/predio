<script setup>
import { ref } from 'vue'
import Manchester from '../assets/man-logo.png'
import argentina from '../assets/Arg-log.png'

const datefilter = ref()
const gameA = ref('Argentina')
const gameB = ref('Manchester')
const liveTime = ref(85)
const gameAS = ref(5)
const gameBS = ref(2)
</script>
<template>
  <div class="game-container">
    <div class="game-bar">
      <div class="game-filter">
        <div class="filter">All</div>
        <div class="filter">Live</div>
      </div>
      <div class="calender">
        <input type="date" v-model="datefilter" class="date-filter" />
      </div>
    </div>
    <div class="game-controller">
      <div class="game-inner">
        <div class="game-time">
          {{ `${liveTime} '` }}
        </div>
        <div class="game-details">
          <div class="game">
            <div class="game-img" :style="{ backgroundImage: `url(${Manchester})` }"></div>
            <span>{{ gameA }}</span>
          </div>
          <div class="game-score">{{ gameAS }} : {{ gameBS }}</div>
          <div class="game">
            <div class="game-img" :style="{ backgroundImage: `url(${argentina})` }"></div>
            <span>{{ gameB }}</span>
          </div>
        </div>
      </div> 
    </div>
  </div>
</template>
<style>
@import '../style/gamePanel.css';
</style>
