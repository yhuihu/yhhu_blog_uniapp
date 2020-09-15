import {
	myRequest
} from '@/utils/request/index.js'
export function getSwiperImage() {
	return myRequest({
		url: 'carousel/list',
		method: 'GET'
	})
}
