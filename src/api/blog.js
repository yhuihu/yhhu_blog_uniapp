import {
    myRequest
} from '@/utils/request/index.js'

export function getBlogDetail(target) {
    return myRequest({
        url: 'blog/' + target + '/detail',
        method: 'GET'
    })
}

export function getBlogList(page, size) {
    return myRequest({
        url: 'blog',
        method: 'GET',
        data: {
            page: page,
            size: size
        }
    })
}