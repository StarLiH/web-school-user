import request from '@/utils/request'

export default {
  //章节添加
  addChapter(chapter) {
    return request({
      url: '/xiyuecourse/chapter/addChapter',
      method: 'post',
      data:chapter
    })
  },
  //章节查询
  getChapter(chapterId) {
    return request({
      url: '/xiyuecourse/chapter/getChapterInfo/'+chapterId,
      method: 'get'
    })
  },
  //章节修改
  updateChapter(chapter) {
    return request({
      url: '/xiyuecourse/chapter/updateChapter/',
      method: 'post',
      data:chapter
    })
  },
  //章节删除
  deleteChapter(chapterId) {
    return request({
      url: '/xiyuecourse/chapter/'+chapterId,
      method: 'delete',
    })
  },
}