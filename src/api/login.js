import request from '@/utils/request'

export default {
  //学生登录
  studregister(studInfo){
    return request ({
      url: '/xiyueservice/students/login',
      method: 'post',
      data: studInfo
    })
  },
  //学生token信息
  studentInfo(){
    return request ({
      url: '/xiyueservice/students/getStudentsInfo',
      method: 'get',
    })
  },
  //教师登录
  teachregister(teachInfo){
    return request(teachInfo)({
      url:'/xiyueservice/teachers/login',
      method:'post',
      data:teachInfo
    })
  },
  //教师token信息
  teacherInfo(){
    return request ({
      url: '/xiyueservice/students/getTeachersInfo',
      method: 'get',
    })
  },
}