import {
	myRequest
} from '@/utils/request/index.js'
export function getTag() {
	return myRequest({
		url: 'tag',
		method: 'GET',
		data: {
			page: 1,
			size: 999
		}
	})
}
