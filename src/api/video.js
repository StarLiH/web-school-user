import request from '@/utils/request'

export default {
  //章节添加
  addVideo(video) {
    return request({
      url: '/xiyuecourse/video/addVideo',
      method: 'post',
      data:video
    })
  },
  //章节查询
  getVideo(videoId) {
    return request({
      url: '/xiyuecourse/video/getVideoInfo/'+videoId,
      method: 'get'
    })
  },
  //章节修改
  updateVideo(video) {
    return request({
      url: '/xiyuecourse/video/updateVideo',
      method: 'post',
      data:video
    })
  },
  //章节删除
  deleteVideo(id) {
    return request({
      url: '/xiyuecourse/video/'+id,
      method: 'delete',
    })
  },
  //视频删除
  removeVideo(id) {
    return request({
      url: '/xiyuevod/video/removeVideo/'+id,
      method: 'delete',
    })
  },
}