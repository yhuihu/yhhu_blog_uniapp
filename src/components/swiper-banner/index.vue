<template>
	<swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
		<swiper-item v-for="(item,index) in homeSlide" :key="index">
			<image :src="item.image" style="width: 100%;height: 100%;"></image>
		</swiper-item>
	</swiper>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		props: {
			homeSlide: {
				type: Array,
				default: []
			},
			indicatorDots: {
				type: Boolean,
				default: true
			},
			autoplay: {
				type: Boolean,
				default: true
			},
			interval: {
				type: Number,
				default: 2000
			},
			duration: {
				type: Number,
				default: 2000
			}
		},
		methods: {

		}
	}
</script>

<style>

</style>
