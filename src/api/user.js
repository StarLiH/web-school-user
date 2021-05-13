import request from '@/utils/request'

export default {
  //收藏
  updateStudent(userStudent) {
    return request({
      url: '/xiyueservice/students/updateStudent',
      method: 'post',
      data:userStudent
    })
  },
  updateTeacher(userTeacher) {
    return request({
      url: '/xiyueservice/teachers/updateTeacher',
      method: 'post',
      data:userTeacher
    })
  },
}