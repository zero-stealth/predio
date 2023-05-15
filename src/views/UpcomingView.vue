<script setup>
import { useRouter } from 'vue-router'
import pic from '@/assets/news.png'
import argentina from '../assets/Arg-log.png'
import ArrowIcon from '@/icons/ArrowIcon.vue'
import Manchester from '../assets/man-logo.png'
import DesktopNav from '@/components/desktopNav.vue'
import MobileNav from '@/components/mobileNav.vue'

const router = useRouter()

const goBack = () => {
  router.go(-1)
}
</script>
<template>
  <div class="details-container">
    <div class="desknav-layout">
      <DesktopNav class="desk-show" />
    </div>
    <div class="details-wrapper">
      <div
        class="details-image"
        :style="{
          backgroundImage: `linear-gradient(to bottom, transparent, #031e3c), url(${pic})`
        }"
      >
        <div class="details-h">
          <ArrowIcon class="details-arrow" @click="goBack()" />
          <h2>uefa champion</h2>
          <span></span>
        </div>
        <div class="details-image-d">
          <div class="details-d">
            <img :src="argentina" alt="" class="details-d-img" />
            <span>argentina</span>
          </div>
          <div class="details-score">
            <div class="score-p">
              <span>1</span>
              <span>-</span>
              <span>2</span>
            </div>
            <span>19:00</span>
          </div>
          <div class="details-d">
            <img :src="Manchester" alt="" class="details-d-img" />
            <span>Manchester</span>
          </div>
        </div>
      </div>
      <div class="upcoming-in">
        <div class="team-form-u">
          <div class="form-as">
            <div class="team-header">
              <h1>team form</h1>
            </div>
            <div class="form-xs">
              <img :src="Manchester" alt="" class="formation-img" />
              <div class="formation-score">
                <span>1</span>
                <span>-</span>
                <span>2</span>
              </div>
              <img :src="argentina" alt="" class="formation-img" />
            </div>
            <div class="form-xs">
              <img :src="Manchester" alt="" class="formation-img" />
              <div class="formation-score">
                <span>1</span>
                <span>-</span>
                <span>2</span>
              </div>
              <img :src="argentina" alt="" class="formation-img" />
            </div>
          </div>
        </div>
        <div class="team-form-a">
          <div class="team-header">
            <h1>Liga</h1>
          </div>
          <div class="tbl-slider">
            <table>
              <tr>
                <th>team</th>
                <th></th>
                <th>pl</th>
                <th>w</th>
                <th>D</th>
                <th>+/-</th>
                <th>gd</th>
                <th>pts</th>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  <div class="table-formation">
                    <img :src="argentina" alt="" class="tbl-f-image" />
                    <span>argentina</span>
                  </div>
                </td>
                <td>20</td>
                <td>2</td>
                <td>45</td>
                <td>60-76</td>
                <td>+34</td>
                <td>23</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mobilenav-layout">
    <MobileNav />
  </div>
</template> 
<style>
@import '@/style/upcoming.css';
@import '@/style/home.css';
@import '@/style/details.css';
</style>
