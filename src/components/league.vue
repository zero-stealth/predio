<script setup>
import ArrowIcon from '../icons/ArrowIcon.vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import { ref , onMounted } from 'vue'


const data = ref([]);
const isTeam = ref(false)
const router = useRouter()
const isLeague = ref(false)
const isCountry = ref(false)
const teamName = ref('Arsenal')
const countryName = ref('germany')

const DetailsPage = () => {
  router.push({ name: 'Details' })
}

const showLeague = () => {
  isLeague.value = !isLeague.value
}
const showTeam = () => {
  isTeam.value = !isTeam.value
}
const showCountries = () => {
  isCountry.value = !isCountry.value
}

onMounted(async () => {
const options = {
  method: 'GET',
  url: 'https://footapi7.p.rapidapi.com/api/tournament/categories',
  headers: {
    'X-RapidAPI-Key': '324865d09cmsh592fb6c5fcae2abp189c83jsnf98e0d363d77',
    'X-RapidAPI-Host': 'footapi7.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
  data.value = response.data.categories;
  console.log(data.value);
} catch (error) {
	console.error(error);
}

});


</script>
<template>
  <div class="league-container">
    <div class="l-c-wrapper">
      <div class="league-header" @click="showLeague()">
        <h1>league</h1>
        <ArrowIcon class="league-icon" :class="[isLeague == true ? 'icon-active' : '']" />
        <span @click="DetailsPage()">view all</span>
      </div>
      <div class="l-items-list" v-show="isLeague == true" >
        <div class="l-items-container"  v-for="({ id,  name, }, index) in data"
        :key="index">
          <div :style="{ backgroundImage: `url(https://footapi7.p.rapidapi.com/api/tournament/${id}/image)` }" class="l-items-image">
            <!-- img -->
          </div>
          <span>{{ name }}</span>
        </div> 
      </div>
    </div>
    <div class="l-c-wrapper">
      <div class="league-header" @click="showTeam()">
        <h1>Team</h1>
        <ArrowIcon class="league-icon"  :class="[isTeam == true ? 'icon-active' : '']" />
        <span @click="DetailsPage()">view all</span>
      </div>
      <div class="l-items-list" v-show="isTeam == true">
        <div class="l-items-container">
          <div :style="{ backgroundImage: `url(${pic})` }" class="l-items-image">
            <!-- img -->
          </div>
          <span>{{ teamName }}</span>
        </div>
      </div>
    </div>
    <div class="l-c-wrapper">
      <div class="league-header" @click="showCountries()">
        <h1>Countries</h1>
        <ArrowIcon class="league-icon"  :class="[isCountry == true ? 'icon-active' : '']" />
        <span @click="DetailsPage()">view all</span>
      </div>
      <div class="l-items-list" v-show="isCountry == true">
      <div class="l-items-container">
          <div :style="{ backgroundImage: `url(${pic})` }" class="l-items-image">
            <!-- img -->
          </div>
          <span>{{ countryName }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
@import '../style/league.css';
</style>
