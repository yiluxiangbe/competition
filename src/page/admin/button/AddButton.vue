<template>
  <div class="add-contain">
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">新增</button>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="input-group mb-3">
              <!-- 问题 -->
              <input v-model.trim="answerList.question" type="text" class="form-control" placeholder="问题" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
          </div>
          <div class="modal-body">
            <div class="input-group mb-3">
              <!-- 答案 -->
              <input v-model.trim="answerList.key" type="text" class="form-control" placeholder="答案" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
          </div>
          <div class="modal-body">
            <div class="input-group mb-3">
              <!-- 分值 -->
              <input v-model.number="answerList.score" type="text" class="form-control" placeholder="分值" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
          </div>
          <div class="modal-body">
            <div class="input-group mb-3">
              <!-- 选项 -->
              <!-- A -->
              <input v-model.trim="optionsList.A" type="text" class="form-control" placeholder="A" aria-label="Username" aria-describedby="basic-addon1" />
              <!-- B -->
              <input v-model.trim="optionsList.B" type="text" class="form-control" placeholder="B" aria-label="Username" aria-describedby="basic-addon1" />
              <!-- C -->
              <input v-model.trim="optionsList.C" type="text" class="form-control" placeholder="C" aria-label="Username" aria-describedby="basic-addon1" />
              <!-- D -->
              <input v-model.trim="optionsList.D" type="text" class="form-control" placeholder="D" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="saveAnswerMessage">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'
import { insertAnswerList } from '@/api/index'
export default {
  name: 'AddButton',
  data() {
    return {
      answerList: {
        question: '',
        key: '',
        // 默认分值为20
        score: 20,
        options: ''
      },
      // 存放ABCD的，提交数据的时候要进行处理然后在发起请求
      optionsList: {
        A: '',
        B: '',
        C: '',
        D: ''
      }
    }
  },
  methods: {
    // 提交数据新增学生信息
    async initSaveAnswerMessage() {
      const token = localStorage.getItem('token')
      const result = await insertAnswerList(token, this.answerList)
      console.log(result)
      // 将获取的数据转存到我们data中
      // 为了严谨我们需要判断是否请求成功
      if (result.code === 200) {
        console.log('成功:' + result)
      }
    },
    // 提交按钮
    saveAnswerMessage() {
      // 先将optionsList里面的数据进行处理
      // 用:符号分割
      this.answerList.options = `${this.optionsList.A}:${this.optionsList.B}:${this.optionsList.C}:${this.optionsList.D}`
      this.initSaveAnswerMessage()
    }
  }
}
</script>

<style scoped lang="less">
.add-contain {
  display: block;
  height: 80px;
  width: 120px;
  .btn-primary {
    height: 40px;
    width: 100px;
  }
  .modal {
    .modal-body {
      .form-control {
        height: 56px;
      }
    }
  }
}
</style>
