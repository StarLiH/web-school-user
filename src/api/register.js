import request from '@/utils/request'

export default {
  //学生注册
  studregister(studInfo){
    return request ({
      url: '/xiyueservice/students/register',
      method: 'post',
      data: studInfo
    })
  },
  //教师注册
  teachregister(teachInfo){
    return request(teachInfo)({
      url:'/xiyueservice/teachers/register',
      method:'post',
      data:teachInfo
    })
  }
}