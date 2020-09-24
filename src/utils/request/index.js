const BASE_URL = 'http://127.0.0.1:8899/'
export const myRequest = (options) => {
	return new Promise((resolve,reject) => {
		uni.request({
			url: BASE_URL + options.url,
			method: options.method || 'GET',
			data: options.data || {},
			success: (res) => {
				// uni.showToast({
				// 	title:'获取成功',
				// 	duration: 2000
				// })
				// console.log(res)
				resolve(res.data)
			},
			fail: (err) => {
				uni.showToast({
					title:'请检查网络',
					icon: none,
					duration: 2000
				})
				reject(err)
			}
		})
	})
}
