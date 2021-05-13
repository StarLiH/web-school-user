import request from '@/utils/request'

export default {
  //收藏
  addCollection(collect) {
    return request({
      url: '/xiyuecourse/collection/addMyCollection',
      method: 'post',
      data:collect
    })
  },
  //收藏查询
  getCollection(userId) {
    return request({
      url: '/xiyuecourse/collection/getMyCollection/'+userId,
      method: 'get',
    })
  },
  //取消收藏
  removeCollection(userId,courseId) {
    return request({
      url: '/xiyuecourse/collection/removeCollection/'+userId+'/'+courseId,
      method: 'delete',
    })
  },
}