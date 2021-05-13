import request from '@/utils/request'

export default {
  //添加试题
  addExam(exam){
    return request ({
      url: '/xiyueservice/exam/addExam',
      method: 'post',
      data:exam
    })
  },
  //学生查询试题
  getStudentExam(studentId){
    return request ({
      url: '/xiyueservice/exam/getStudentExam/'+studentId,
      method: 'get',
    })
  },
  //教师查询试题
  getTeacherExam(teacherId){
    return request ({
      url: '/xiyueservice/exam/getTeacherExam/'+teacherId,
      method: 'get',
    })
  },
  //提交试题
  submitMyExam(id){
    return request ({
      url: '/xiyueservice/exam/submitMyExam/'+id,
      method: 'get',
    })
  },
  //评阅试题
  readMyExam(id){
    return request ({
      url: '/xiyueservice/exam/readMyExam/'+id,
      method: 'get'
    })
  },
}