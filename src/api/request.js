import axios from 'axios'
// 导入进度条插件
import nprogress from 'nprogress'
// 引入进度条样式表
import 'nprogress/nprogress.css'
// 创建axios请求实例
const requests = axios.create({
  baseURL: 'http://10.203.157.229/api',
  timeout: 5000
})
// Add a request interceptor
// 添加请求前拦截器
requests.interceptors.request.use(
  function (config) {
    // 进度条处理函数
    nprogress.start()

    // Do something before request is sent
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// 添加响应后拦截器
// Add a response interceptor
requests.interceptors.response.use(
  function (response) {
    // 进度条处理函数
    nprogress.done()
    // 处理token,并保存
    const token = response.data.token
    if (token) {
      console.log('存储token')
      localStorage.setItem('token', token)
    }
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  }
)

// 暴露出去
export default requests
