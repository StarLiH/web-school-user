import request from '@/utils/request'

export default {
  //添加试题
  addTeacherExam(exam){
    return request ({
      url: '/xiyueservice/teacherExam/addTeacherExam',
      method: 'post',
      data:exam
    })
  },
  //教师查询资源
  getMyExam(teacherId){
    return request ({
      url: '/xiyueservice/teacherExam/getMyExam/'+teacherId,
      method: 'get',
    })
  },
  //教师查询提交
  getSubmitExam(teacherId){
    return request ({
      url: '/xiyueservice/teacherExam/getSubmitExam/'+teacherId,
      method: 'get',
    })
  },
  //返回试题
  addSubmitExam(exam){
    return request ({
      url: '/xiyueservice/teacherExam/addSubmitExam',
      method: 'post',
      data:exam
    })
  },
  //提交试题
  submitMyExam(exam){
    return request ({
      url: '/xiyueservice/studentExam/submitMyExam',
      method: 'post',
      data:exam
    })
  },
  //查询提交
  getMySubmit(studentId){
    return request ({
      url: '/xiyueservice/studentExam/getMySubmit/'+studentId,
      method: 'get'
    })
  },
  //删除资源
  removeMySubmit(id){
    return request ({
      url: '/xiyueservice/teacherExam/deleteMyExam/'+id,
      method: 'delete'
    })
  },
}