<template>
	<div>
		<city-header></city-header>
		<city-search></city-search>
		<city-list
				:hotCities="hotCities"
				:cities="cities"
				:letter="letter"
		>
		</city-list>
		<city-alphabet
				:cities="cities"
				@change="handleLetterChange"
		></city-alphabet>
	</div>
</template>

<script>
  import CityHeader from './components/Header'
  import CitySearch from './components/Search'
  import CityList from './components/List'
  import CityAlphabet from './components/Alphabet'
	import axios from 'axios'
  export default {
    name: 'City',
		components: {
      CityHeader,
      CityList,
      CitySearch,
      CityAlphabet
		},
		data(){
      return {
        hotCities: [],
        cities: {},
        letter: ''
			}
		},
		methods: {
      getCityInfo(){
        axios.get('/api/city.json')
				.then(this.getCityInfoSucc)
			},
      getCityInfoSucc(res){
        res = res.data;
        if(res && res.ret){
          this.hotCities = res.data.hotCities;
          this.cities = res.data.cities;
				}
			},
      handleLetterChange(letter){
        this.letter = letter;
			}
		},
		mounted() {
			this.getCityInfo();
		}
  }
</script>

<style scoped>

</style>
