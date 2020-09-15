import {
	myRequest
} from '@/utils/request/index.js'
export function getTag() {
	return myRequest({
		url: 'blog/tag/list',
		method: 'GET',
		data: {
			page: 1,
			size: 999
		}
	})
}
