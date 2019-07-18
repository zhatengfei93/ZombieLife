import axios from 'axios'
// import { Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'
// import qs from 'qs'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 30 * 1000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.baseURL = process.env.VUE_APP_BASE_API
      config.url = config.url + '?token=' + getToken()
    }
    console.log(config)
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
// service.interceptors.response.use(
//   /**
//    * If you want to get http information such as headers or status
//    * Please return  response => response
//   */

//   /**
//    * Determine the request status by custom code
//    * Here is just an example
//    * You can also judge the status by HTTP Status Code
//    */
//   response => {
//     console.log(response)
//     if (response && response.headers && response.headers['content-type'].indexOf('application/json') > -1) {
//       let res = response
//       if (res instanceof ArrayBuffer) {
//         try {
//           const enc = new TextDecoder('utf-8')
//           res = JSON.parse(enc.decode(new Uint8Array(res))) // 转化成json对象
//         } catch (e) {
//           return Promise.reject('系统错误')
//         }
//       }
//       if (res.code === 0) {
//         return Promise.resolve(res)
//       }
//       Message({
//         message: res.detail || '系统错误',
//         type: 'error',
//         duration: 5 * 1000
//       })
//       return Promise.reject(res.detail)
//     }
//     return Promise.resolve(response)
//   },
//   // },
//   error => {
//     console.log('err' + error) // for debug
//     Message({
//       message: error.message,
//       type: 'error',
//       duration: 5 * 1000
//     })
//     return Promise.reject(error)
//   }
// )

export default service
