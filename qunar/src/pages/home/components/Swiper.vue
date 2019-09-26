<template>
  <div class="wrapper">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="(item, index) of swiperList" :key="item.id">
        <img
          class="swiper-img"
          :src="item.imgUrl"
          :alt="'banner'+index" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
  <!--    <div class="swiper-button-prev" slot="button-prev"></div>-->
  <!--    <div class="swiper-button-next" slot="button-next"></div>-->
  <!--    <div class="swiper-scrollbar"   slot="scrollbar"></div>-->
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [
        {
          id: '1',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/279640fb8c1f7eea398045bfe8ac92b1.png_750x200_ac53465f.png'
        },
        {
          id: '2',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20199/4e3f5a83099e6571ce4cad8609236121.jpg_750x200_48199ef2.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff;
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 26.66%
    background-color: #ddd;
    .swiper-img
      width: 100%;
</style>
