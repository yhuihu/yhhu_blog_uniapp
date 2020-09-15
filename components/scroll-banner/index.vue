̥<template>
	<scroll-view class="scroll-view_H" scroll-x="true">
		<view class="scroll-view-item_H" v-for="(item,index) in scrollData" :key="index">
			<view>{{item.name}}</view>
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
			scrollData: {
				type: Array,
				default: []
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.scroll-view_H {
		/* 文本不会换行，文本会在在同一行上继续，直到遇到 <br> 标签为止。 */
		white-space: nowrap;
		width: 100%;
	}

	.scroll-view-item_H {
		display: inline-block;
		width: 20%;
		height: 60rpx;
		border: 1upx solid;
		text-align: center;
		font-size: 36upx;
		margin: 0rpx;
	}

	.scroll-view-item_H view {
		box-sizing: border-box;
	}

	.scroll-view-item_H:nth-child(8n-7) {
		background: #8A9B0F
	}

	.scroll-view-item_H:nth-child(8n-6) {
		background: #EB6841
	}

	.scroll-view-item_H:nth-child(8n-5) {
		background: #3FB8AF
	}

	.scroll-view-item_H:nth-child(8n-4) {
		background: #FE4365
	}

	.scroll-view-item_H:nth-child(8n-3) {
		background: #FC9D9A
	}

	.scroll-view-item_H:nth-child(8n-2) {
		background: #EDC951
	}

	.scroll-view-item_H:nth-child(8n-1) {
		background: #C8C8A9
	}

	.scroll-view-item_H:nth-child(8n) {
		background: #83AF9B
	}

	.scroll-view-item_H:first-child {
		background: #28a745
	}

	.scroll-view-item_H:last-child {
		background: #ffc107
	}

	.scroll-view-item_H:hover {
		text-shadow: #ffffff 1px 1px 1px;
		color: #ffffff;
	}
</style>
