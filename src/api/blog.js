import {
	myRequest
} from '@/utils/request/index.js'
export function getBlogDetail(target){
	return myRequest({
		url: target+'/detail',
		method: 'GET'
	})
}