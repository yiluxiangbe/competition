<template>
  <div>
    <!-- 标题 -->
    <h4 class="text-center">学生信息管理</h4>
    <!-- 新增学生信息 -->
    <AddButton></AddButton>
    <!-- 分页 -->
    <!-- 这里有两个自定义事件，一个是页码改变，一个是按名字搜索 -->
    <Page @changeCurrentPage="changeCurrent($event)" @nameChange="nameChange($event)"></Page>
    <!-- 用户列表 -->
    <table class="table table-bordered table-striped table-hover">
      <thead>
        <tr>
          <th>热点热评</th>
          <th>url</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in hotList" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.keyword }}</td>
          <td>
            <a href="#">{{ item.url }}</a>
          </td>
          <!-- 最好都加上取消默认事件 -->
          <td><a href="#" @click.prevent="userInfo(item.id)">详情</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { reqHotList } from '@/api/index'
export default {
  name: 'Hot',
  data() {
    return {
      hotList: []
    }
  },
  methods: {
    async getHotList() {
      // 获取token
      const token = localStorage.getItem('token')
      const result = await reqHotList(token)
      console.log(result)
      // 将获取的数据转存到我们data中
      // 为了严谨我们需要判断是否请求成功
      if (result.status === 200) {
        this.hotList = result.data.data
      }
    }
  },
  mounted() {
    this.getHotList()
  }
}
</script>

<style></style>
