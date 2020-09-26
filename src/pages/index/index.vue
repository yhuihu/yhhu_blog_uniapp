<template>
  <view>
    <!-- 轮播图 -->
    <view>
      <my-swiper :homeSlide="homeSlide" :indicatorDots="indicatorDots" :interval="interval"
                 :duration="duration"></my-swiper>
    </view>
    <!-- 标签 -->
    <view style="margin-top: 10rpx;">
      <scroll-banner :scrollData="scrollData"></scroll-banner>
    </view>
    <!-- 博客内容 -->
    <view style="margin-top: 10rpx;">
      <blog-list :blogList="blogData"></blog-list>
    </view>
  </view>
</template>
<script>
import mySwiper from '@/components/swiper-banner/index.vue'
import scrollBanner from '@/components/scroll-banner/index.vue'
import blogList from '@/components/blog-list/index.vue'
import {getSwiperImage} from '@/api/swiper.js'
import {getTag} from '@/api/tag.js'
import {getBlogList} from '@/api/blog.js'

export default {
  data() {
    return {
      homeSlide: [],
      scrollData: [],
      blogData: [],
      indicatorDots: true,
      autoplay: true,
      interval: 2000,
      duration: 500
    }
  },
  onLoad() {
    uni.showLoading({
      title: '数据初始化中'
    })
    this.initSwiper()
    this.initTag()
    this.initBlogList()
    uni.hideLoading()
  },
  methods: {
    initSwiper() {
      getSwiperImage().then(res => {
        if (res.code === 200) {
          this.homeSlide = res.data.records
        }
      })
    },
    initTag() {
      getTag().then(res => {
        if (res.code === 200) {
          this.scrollData = res.data.records
        }
      })
    },
    initBlogList() {
      getBlogList(1, 999).then(res => {
        if (res.code === 200) {
          this.blogData = res.data.records
        }
      })
    }
  },
  components: {
    mySwiper,
    scrollBanner,
    blogList
  }
}
</script>

<style>
</style>
