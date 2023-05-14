<script setup>
import { ref } from 'vue'
import UnlikeIcon from '../icons/unlikeIcon.vue'
import Manchester from '../assets/man-logo.png'
import argentina from '../assets/Arg-log.png'
import LikeIcon from '../icons/likeIcon.vue'
import { useRouter } from 'vue-router'

const datefilter = ref()
const router = useRouter();
const gameA = ref('Manchester')
const gameB = ref('Argentina')
const liked = ref(false)
const liveTime = ref(85)
const gameAS = ref(5)
const gameBS = ref(2)
const filter = ref('Prediction')
const username = ref('pp')

const filterAll = () => {
  filter.value = 'all'
}
const filterLive = () => {
  filter.value = 'live'
}
const filterPrediction = () => {
  filter.value = 'Prediction'
}
const addFav = () => {
  liked.value = !liked.value
}

const goLive = () => {
  router.push({ name: 'Details', params: { username } })
}

const goPrediction = () => {
  router.push({ name: 'Upcoming', params: { username } })

}
</script>
<template>
  <div class="game-container">
    <div class="game-bar">
      <div class="game-filter">
        <!-- <div class="filter" @click="filterAll()">All</div> -->
        <div class="filter" @click="filterLive()" :class="[filter == 'live' ? 'active-f' : '']">
          Live
        </div>
        <div
          class="filter"
          @click="filterPrediction()"
          :class="[filter == 'Prediction' ? 'active-f' : '']"
        >
          Prediction
        </div>
      </div>
      <div class="calender">
        <input type="date" class="date-filter" />
      </div>
    </div>
    <div class="game-controller" @click="goLive()" v-show="filter == 'live'">
      <div class="game-inner">
        <div class="game-time">
          <LikeIcon class="game-like-icon" v-if="liked == true" @click="addFav()" />
          <UnlikeIcon class="game-like-icon" @click="addFav()" v-else />
          <div>
            <h1>{{ `${liveTime} '` }}</h1>
          </div>
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
    <div class="game-prediction" @click="goPrediction()" v-show="filter == 'Prediction'">
      <div class="game-inner">
        <div class="g-p">
          <div class="g-pan">
            <div class="game">
              <div class="game-img" :style="{ backgroundImage: `url(${Manchester})` }"></div>
              <span>{{ gameA }}</span>
            </div>
            <div class="game-score"><h3>19.00</h3> </div>
            <div class="game">
              <div class="game-img" :style="{ backgroundImage: `url(${argentina})` }"></div>
              <span>{{ gameB }}</span>
            </div>
          </div>
          <div class="prediction-pan">
            <div class="pp-score">
              <span>1</span>
            </div>
            <div class="dott-s">:</div>
            <div class="pp-score">
              <span>2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
@import '../style/gamePanel.css';
</style>
