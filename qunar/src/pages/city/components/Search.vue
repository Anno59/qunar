<template>
	<div>
		<div class="search">
			<input v-model="keywords" class="search-input" type="text" placeholder="输入城市名或拼音" />
		</div>
		<div
				class="search-content"
				ref="search"
		>
			<ul>
				<li
						class="search-item border-bottom"
						v-for="(city, index) in item"
						:key="index"
				>
					{{city}}
				</li>
				<li class="search-item border-bottom"
						v-show="hasItem"
				>
					没有找到匹配数据
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import Bscroll from 'better-scroll'
  export default {
    name: 'CitySearch',
		props: {
    	cities: Object,
		},
		data(){
      return {
        keywords: '',
				item: [],
				timer: null,
			}
		},
		computed: {
      hasItem() {
        return !this.item.length;
			}
		},
		watch: {
    	keywords(){
    	  let timer = this.timer;
    	  if(timer){
    	    clearTimeout(timer);
				}
    	  if(!this.keywords){
    	    this.item = []
					return
				}
				timer = setTimeout(() => {
					const keywords = this.keywords;
					const item = [];
					for(let i in this.cities){
						this.cities[i].forEach(function(e){
							if(e.spell.indexOf(keywords) > -1
								|| e.name.indexOf(keywords) > -1){
								item.push(e.name)
							}
						})
					}
					this.item = item;
				}, 100)
			}
		},
		mounted(){
      this.scroll = new Bscroll(this.$refs.search)
		}
  }
</script>

<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	.search
		height: .72rem
		padding: 0 .1rem
		background: $bgColor
		.search-input
			box-sizing: border-box
			width: 100%
			height: .62rem
			padding: 0 .1rem
			line-height: .62rem
			text-align: center
			border-radius: .06rem
			color: #666
	.search-content
		z-index: 1
		overflow: hidden
		position: absolute
		top: 1.58rem
		left: 0
		right: 0
		bottom: 0
		background: #eee
		.search-item
			line-height: .62rem
			padding-left: .2rem
			background: #fff
			color: #666
</style>
