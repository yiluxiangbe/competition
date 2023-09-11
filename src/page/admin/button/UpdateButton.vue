<template>
  <div class="update-contain">
    <div class="form-group">
      <input v-model="answer.question" class="form-control" placeholder="题目详情" />
    </div>
    <div class="form-group">
      <input v-model="amswer.key" class="form-control" placeholder="答案" />
    </div>
    <div class="form-group">
      <input v-model.number="answer.score" class="form-control" placeholder="分数" />
    </div>
    <div class="form-group">
      <input v-model.number="answer.options" class="form-control" placeholder="选项" />
    </div>
    <button @click="backList()" type="button" class="btn btn-primary">保存</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'UpdateButton',
  data() {
    return {
      answer: {
        id: '',
        question: '',
        key: '',
        score: '',
        options: ''
      }
    }
  },
  methods: {
    // 提交修改信息
    async initUpdateMessage() {
      const { data: result } = await axios({
        method: 'POST',
        url: 'http://localhost:8888/score/update',
        data: JSON.stringify(this.student),
        dataType: 'json',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log(result)
      // 将获取的数据转存到我们data中
      // 为了严谨我们需要判断是否请求成功
      // if (result.code === 200) {
      //   this.userlist = result.data.data
      //   console.log(this.userlist)
      // }
    },
    // 返回分数信息列表
    backList() {
      this.initUpdateMessage()
      this.$router.push('/admin/answer')
    }
  },
  created() {
    this.asnwer.id = Number(this.$route.query.id)
    // 获取需要修改的参数
    console.log('id:-----' + this.id)
    console.log(typeof this.id)
  }
}
</script>

<style lang="less" scoped>
.update-contain {
  position: fixed;
  bottom: 100px;
  display: flex;
  justify-content: left;
  align-items: center;
  .form-control {
    width: 100%;
    height: 50px;
  }
}
</style>
