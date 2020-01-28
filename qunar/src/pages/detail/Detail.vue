<template>
	<div>
		<detail-banner
				:bannerImg="bannerImg"></detail-banner>
		<detail-header></detail-header>
		<div class="content">
			<detail-list :categoryList="list"></detail-list>
		</div>
		<div class="content"></div>
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
			bannerImg: 'http://img1.qunarzz.com/sight/p0/201301/16/aecd792aa219fd0793835fbb.jpg_600x330_8a61adc9.jpg'
		}
	},
	methods: {
		async getDetailInfo() {
		  const detail = await axios.get('/api/detail.json');
		  const resData = detail.data;
		  if(resData && resData.ret){
		    this.list = resData.data.categoryList
			}
		}
	},
	mounted() {
	  this.getDetailInfo ()
	}
}
</script>

<style lang="stylus" scoped>
	.content
		height: 50rem
</style>
