<template>
	<view style="width: 80%;margin-left: auto;margin-right: auto;" v-html="content">
	</view>
</template>

<script>
	import { getBlogDetail } from '@/api/blog.js'
	import marked from '@/utils/marked/index.js'
	export default {
		data() {
			return {
				id: 1,
				content: ''
			}
		},
		methods: {

		},
		onLoad(options) {
			console.log(options, options.id)
			if (options.id) {
				this.id = options.id
			}
			getBlogDetail(this.id).then(res=>{
				console.log(res)
				this.content = marked(res.data.content)
			})
		}
	}
</script>

<style>

</style>
