import {
	myRequest
} from '@/utils/request/index.js'
export function getBlogDetail(target){
	return myRequest({
		url: 'Blog/detail',
		method: 'GET',
		data: {
			id: target
		}
	})
}