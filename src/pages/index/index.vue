<template>
	<view>
		<!-- 轮播图 -->
		<view>
			<my-swiper :homeSlide="homeSlide" :indicatorDots="indicatorDots" :interval="interval" :duration="duration"></my-swiper>
		</view>
		<!-- 标签 -->
		<view style="margin-top: 10rpx;">
			<scroll-banner :scrollData="scrollData"></scroll-banner>
		</view>
		<!-- 博客内容 -->
	</view>
</template>
<script>
	import mySwiper from '@/components/swiper-banner/index.vue'
	import scrollBanner from '@/components/scroll-banner/index.vue'
	import {
		getSwiperImage
	} from '@/api/swiper.js'
	import {
		getTag
	} from '@/api/tag.js'
	export default {
		data() {
			return {
				homeSlide: [],
				scrollData: [],
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
			this.initSswiper()
			this.initTag()
			uni.hideLoading()
		},
		methods: {
			initSswiper() {
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
			}
		},
		components: {
			mySwiper,
			scrollBanner
		}
	}
</script>

<style>
</style>
