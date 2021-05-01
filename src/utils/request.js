import axios from 'axios'
import cookie from 'js-cookie'

//创建axios实例
const service = axios.create({
  baseURL:'http://localhost:9001',//请求前缀
  timeout:20000 //超时时间
})

//登录拦截器
service.interceptors.request.use(
  config => {
    //判断cookie里面是否存在token
    if(cookie.get('user_token')){
      config.headers['token']=cookie.get('user_token');
    }
    return config
  },
  err => {return Promise.reject(err)}
)



export default service