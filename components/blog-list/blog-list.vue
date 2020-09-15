<template>
	<scroll-view scroll-y="true">
		<view style="100%" v-for="(item,index) in blogList" :key="index">
			<a></a>
		</view>
	</scroll-view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		props: {
			blogList: {
				type: Array,
				default: []
			}
		},
		methods: {

		}
	}
</script>

<style>

</style>
