// 使用 Mock
// 这个文件不用暴露只需要执行一次直接引入就行
import Mock from 'mockjs'
import banner from './banner.json'
Mock.mock('/mock/banner', { code: 200, data: banner })
