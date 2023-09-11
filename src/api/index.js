import axios from 'axios'
import requests from './request'
import requestsMock from './requestMock'
// 这里面写所有的请求

// 登录
export const reqLogin = (data) => {
  return requests({ method: 'post', url: '/admin/login', data: data })
}

// 注册
export const reqRegister = (data) => {
  return requests({ method: 'post', url: '/admin/register', data: data })
}

// 获取热点热评的信息,这里我们要传递参数
// 这里我们需要token验证
export const reqHotList = (token) => {
  return requests({
    method: 'get',
    url: '/hot/get',
    headers: {
      Authorization: token, // 添加 Token 到请求头中
      'Content-Type': 'application/json' // 设置请求头的 Content-Type
    }
  })
}

// 获取答题列表的信息,这里我们要传递参数
// 这里我们需要token验证，这里是乱序加限制条数获取
export const reqAnswerList = (token, pageCurrent) => {
  return requests({
    method: 'get',
    url: '/answer/get',
    headers: {
      Authorization: token, // 添加 Token 到请求头中
      'Content-Type': 'application/json' // 设置请求头的 Content-Type
    }
  })
}

// 获取答题列表的信息,这里我们要传递参数
// 这里我们需要token验证,这里是分页获取
// 这里需要传递页码数
export const reqAdminAnswerList = (token, pageCurrent, keyword) => {
  return requests({
    method: 'get',
    url: '/answer/getAdmin',
    headers: {
      Authorization: token, // 添加 Token 到请求头中
      'Content-Type': 'application/json' // 设置请求头的 Content-Type
    },
    params: {
      page: pageCurrent,
      keyword: keyword
    }
  })
}

// 提交新增的题库信息
// 传递token和新增信息
export const insertAnswerList = (token, answer) => {
  return requests({
    method: 'post',
    url: '/answer/insert',
    headers: {
      Authorization: token, // 添加 Token 到请求头中
      'Content-Type': 'application/json' // 设置请求头的 Content-Type
    },
    data: answer
  })
}

// 删除题库数据
// 这里我们需要携带id
export const deleteAnswerList = (token, id) => {
  return requests({
    method: 'post',
    url: '/answer/delete',
    headers: {
      Authorization: token, // 添加 Token 到请求头中
      'Content-Type': 'application/json' // 设置请求头的 Content-Type
    },
    data: {
      id: id
    }
  })
}

// mock获取虚拟数据，这种请求会被服务器拦截
// 这里获取banner数据
export const reqBannerList = () => {
  return requestsMock({ method: 'get', url: 'banner' })
}
