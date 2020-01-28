<template>
	<div>
		<detail-banner
			:bannerImg="bannerImg"
			:sightName="sightName"
			:gallaryImgs="gallaryImgs"
		></detail-banner>
		<detail-header></detail-header>
		<div class="content">
			<detail-list :categoryList="list"></detail-list>
		</div>
	</div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'

export default {
	name: 'Detail',
	components: {
		DetailBanner,
		DetailHeader,
		DetailList
	},
	data(){
		return {
		  list: [],
      sightName: '',
			bannerImg: '',
      gallaryImgs: [],
      categoryList: [],
		}
	},
	methods: {
		async getDetailInfo() {
		  const detail = await axios.get('/api/detail.json', {
		    params :{
		      id: this.$route.params.id
				}
			});
		  const resData = detail.data;
		  if(resData && resData.ret){
		    this.list = resData.data.categoryList
		    this.gallaryImgs = resData.data.gallaryImgs
		    this.bannerImg = resData.data.bannerImg
		    this.sightName = resData.data.sightName
			}
		}
	},
	activated() {
	  this.getDetailInfo ()
	}
}
</script>

<style lang="stylus" scoped>
	.content
		height: 50rem
</style>
