import request from '@/utils/request'

export default {
  //课程分类
  getSubjectList() {
    return request({
      url: '/xiyuecourse/subject/getAllSubject',
      method: 'get'
    })
  },
  addCourseInfo(courseInfo) {
    return request({
      url: '/xiyuecourse/course/addCourseInfo',
      method: 'post',
      data: courseInfo
    })
  },
  getAllChapterVideo(courseId) {
    return request({
      url: '/xiyuecourse/chapter/getChapterVideo/' + courseId,
      method: 'get'
    })
  },
  //查询课程信息
  getChouseInfoId(id) {
    return request({
      url: '/xiyuecourse/course/getCourseInfo/'+id,
      method: 'get'
    })
  },
  //修改课程信息
  updateChouseInfoId(courseMesg) {
    return request({
      url: '/xiyuecourse/course/updateCourseInfo',
      method: 'post',
      data:courseMesg
    })
  },
  //显示课程
  getCoursePublish(id) {
    return request({
      url: '/xiyuecourse/course/getPublishCourse/'+id,
      method: 'get',
    })
  },
  //发布
  publishCourse(id) {
    return request({
      url: '/xiyuecourse/course/publishCourse/'+id,
      method: 'post'
    })
  },
  //显示课程
  getCourseByTeacher(){
    return request({
      url: '/xiyuecourse/course/getCourseList',
      method: 'get'
    })
  },
  //删除整个课程
  removeMyCourse(courseId){
    return request({
      url: '/xiyuecourse/course/removeMyCourse/'+courseId,
      method: 'delete'
    })
  }
}