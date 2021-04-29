import service from '@/utils/request'

export function login(userstdents,password){
  return service ({
    url: '/xiyueservice/students/login',
    method: 'post',
    data:{
      userstdents,
      password
    }
  })
}