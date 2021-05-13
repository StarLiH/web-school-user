import request from '@/utils/request'

export default {
  //教师分页查询
  getTeacherPages(page,limit) {
    return request({
      url: '/xiyuecourse/teachers/getTeacherFrontList/'+page+'/'+limit,
      method: 'get'
    })
  },
  //教师详情
  getOneTeacher(teacherId) {
    return request({
      url: '/xiyuecourse/teachers/getTeacherFrontInfo/'+teacherId,
      method: 'get'
    })
  },
  //课程
  getCoursePages(page,limit,searchObj) {
    return request({
      url: '/xiyuecourse/courseFront/getFrontCourseList/'+page+'/'+limit,
      method: 'post',
      data:searchObj
    })
  },
  getCourseMessage(courseId) {
    return request({
      url: '/xiyuecourse/courseFront/getFrontCourseInfo/'+courseId,
      method: 'get'
    })
  },
}