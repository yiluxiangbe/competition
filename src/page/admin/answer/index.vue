<template>
  <div>
    <!-- 标题 -->
    <h4 class="text-center">题库信息管理</h4>
    <AddButton></AddButton>
    <!-- 分页 -->
    <!-- 这里有两个自定义事件，一个是页码改变，一个是按名字搜索 -->
    <Page @changeCurrentPage="changeCurrent($event)" @nameChange="nameChange($event)"></Page>

    <!-- 用户列表 -->
    <table class="table table-bordered table-striped table-hover">
      <thead>
        <tr>
          <th>id</th>
          <th>问题</th>
          <th>答案</th>
          <th>分值</th>
          <th>选项</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in answerList" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.question }}</td>
          <td>{{ item.key }}</td>
          <td>{{ item.score }}</td>
          <td>{{ item.options }}</td>
          <!-- 最好都加上取消默认事件 -->
          <!-- 使用模板字符串来实现路由之间传递参数 -->
          <td><a class="delete" href="#" @click.prevent="deleteAnswer(item)">删除</a></td>
        </tr>
      </tbody>
    </table>
    <router-view></router-view>
  </div>
</template>

<script>
import { reqAdminAnswerList, deleteAnswerList } from '@/api/index'
import AddButton from '../button/AddButton.vue'
import axios from 'axios'
export default {
  name: 'Answer',
  components: { AddButton },
  data() {
    return {
      // 用户列表数据
      answerList: [],
      // 分页的页码数，默认第一页
      currentPage: 1,
      keyword: ''
    }
  },
  methods: {
    answerInfo(id) {
      // 点击之后跳转到详情组件
      // 并且传递一个id过去
      this.$router.push('/admin/answerinfo/' + id)
    },
    // 删除学生成绩数据
    async deleteAnswer(item) {
      console.log(item)
      // 养成习惯，当我们要删除某个数据的时候就要弹出一个警告框，询问是否要确认删除

      alert('是否删除这条数据题目信息为：' + item.question + '的信息！')
      const token = localStorage.getItem('token')
      const { data: result } = await deleteAnswerList(token, item.id)
      console.log(result)
      // 将获取的数据转存到我们data中
      // 为了严谨我们需要判断是否请求成功
      // if (result.code === 200) {
      //   this.userlist = result.data.data
      //   console.log(this.userlist)
      // }
      // 删除之后重新获取资源刷新页面
      this.getAnswerList()
    },
    // 请求题库数据
    async getAnswerList() {
      // 获取token
      const token = localStorage.getItem('token')
      const result = await reqAdminAnswerList(token, this.currentPage, this.keyword)
      console.log(result)
      // 将获取的数据转存到我们data中
      // 为了严谨我们需要判断是否请求成功
      if (result.status === 200) {
        this.answerList = result.data.data
        this.keyword = ''
        // console.log(this.userlist)
      }
    },
    // 获取改变的页码
    changeCurrent($event) {
      console.log($event)
      // 发送请求
      this.currentPage = $event
      // this.initStudentList()
      this.getAnswerList()
    },
    // 按名字搜索
    nameChange($event) {
      this.keyword = $event
      // console.log('keyword:' + this.keyword)
      this.getAnswerList()
    }
  },
  created() {
    this.getAnswerList()
  }
}
</script>

<style lang="less" scoped>
.delete {
  display: inline-block;
  margin-left: 20px;
}
</style>
