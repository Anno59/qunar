<template>
  <div>
    <home-header :city="city"></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-recommend :listData="listData"></home-recommend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import axios from 'axios'
import { mapState } from 'Vuex'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend
  },
  data() {
      return {
        loadedCity: '',
        // city: '',
        swiperList: [],
        iconList: [],
        listData: [],
      }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo() {
      axios.get('/api/index.json',{
        responseType: 'json',
      })
      .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res){
      res = res.data;
      if(res){
        // this.city = res.itemData;
        this.swiperList = res.list;
        this.iconList = res.iconList;
        this.listData = res.listData;
      }
    },
  },
  mounted() {
    this.getHomeInfo();
  },
  activated(){
    if(this.loadedCity !== this.city){
      this.getHomeInfo();
      this.loadedCity = this.city;
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
