<template>
	<div>
		<detail-banner
				:bannerImg="bannerImg"></detail-banner>
		<detail-header></detail-header>
<!--		<div class="content">-->
<!--			<detail-list></detail-list>-->
<!--		</div>-->
		<div class="content"></div>
	</div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
export default {
	name: 'Detail',
	components: {
		DetailBanner,
		DetailHeader,
	},
	data(){
		return {
			bannerImg: 'http://img1.qunarzz.com/sight/p0/201301/16/aecd792aa219fd0793835fbb.jpg_600x330_8a61adc9.jpg'
		}
	}
}
</script>

<style lang="stylus" scoped>
	.content
		height: 50rem
</style>
