<template>
  <div>
    <div class="head">
      <h1>党的二十大精神学习小测试（第一测）</h1>
      <div class="pic"><img src="./image/pic.jpg" alt="" /></div>
    </div>
    <div class="info"><span>单选题（共5题，每个小题20分）</span></div>
    <!-- 题目 -->
    <div v-for="(answer, index) in answerList" :key="answer.id" class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card mt-5">
            <div class="card-header text-center">
              <h4>{{ index + 1 }}.{{ answer.question }}</h4>
            </div>
            <div class="card-body">
              <form>
                <div class="form-group">
                  <div class="custom-control custom-radio">
                    <!-- v-model记忆我们选择单选框的数据 -->
                    <input type="radio" :id="`option${index}A`" :name="`answer${index}`" class="custom-control-input" :value="answer.options.split(':')[0]" v-model="options[index]" />
                    <label class="custom-control-label" :for="`option${index}A`">{{ answer.options.split(':')[0] }}</label>
                  </div>
                </div>
                <div class="form-group">
                  <div class="custom-control custom-radio">
                    <input type="radio" :id="`option${index}B`" :name="`answer${index}`" class="custom-control-input" :value="answer.options.split(':')[1]" v-model="options[index]" />
                    <label class="custom-control-label" :for="`option${index}B`">{{ answer.options.split(':')[1] }}</label>
                  </div>
                </div>
                <div class="form-group">
                  <div class="custom-control custom-radio">
                    <input type="radio" :id="`option${index}C`" :name="`answer${index}`" class="custom-control-input" :value="answer.options.split(':')[2]" v-model="options[index]" />
                    <label class="custom-control-label" :for="`option${index}C`">{{ answer.options.split(':')[2] }}</label>
                  </div>
                </div>
                <div class="form-group">
                  <div class="custom-control custom-radio">
                    <input type="radio" :id="`option${index}D`" :name="`answer${index}`" class="custom-control-input" :value="answer.options.split(':')[3]" v-model="options[index]" />
                    <label class="custom-control-label" :for="`option${index}D`">{{ answer.options.split(':')[3] }}</label>
                  </div>
                </div>
                <div class="form-group text-center">
                  <p id="feedback"></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 提交按钮 -->
    <!-- Button trigger modal -->
    <button type="button" class="btn dati-btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="submitAnswer">提交</button>
    <!-- 刷新题库按钮 -->
    <button class="btn dati-btn btn-primary" type="submit" @click="getNewAnswerList">刷新题目</button>
    <!-- 弹出你的分数 -->
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">你取得的分数是{{ score }}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <!-- <div class="modal-body">...</div> -->
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">关闭</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reqAnswerList } from '@/api/index'
export default {
  name: 'Zxdt',
  data() {
    return {
      // 获取的单选题数据
      answerList: [],
      // 记录选择单选题的选项
      options: [],
      // 记录正确答案
      answerReal: [],
      // 分数
      score: 0,
      // 刷新展示题库的页数
      pageCurrent: 1,
      token: ''
    }
  },
  mounted() {
    // 获取数据
    this.getAnswerList()
  },
  methods: {
    // 获取数据
    async getAnswerList() {
      // 携带token
      // 从localStorage中获取token值
      const token = localStorage.getItem('token')
      this.token = token
      console.log('token:' + token)
      const result = await reqAnswerList(token, this.pageCurrent)
      // 存储数据
      this.answerList = result.data.data
      // 存储正确答案
      for (let i = 0; i < result.data.data.length; i++) {
        this.answerReal[i] = result.data.data[i].key
      }
      console.log(this.answerList)
    },
    // 提交按钮
    submitAnswer() {
      // 计算分数,每次计算之前要先清空
      this.score = 0
      for (let i = 0; i < this.answerReal.length; i++) {
        if (this.answerReal[i] === this.options[i]) {
          this.score = this.score + 20
        }
      }
    },
    // 刷新题库
    getNewAnswerList() {
      this.getAnswerList(this.token)
    }
  }
}
</script>

<style>
.container {
  margin-bottom: 0px;
}
.card-header {
  background-color: #007bff;
  color: #fff;
}

.form-group {
  display: inline-block;
  margin-bottom: 10px;
  margin-right: 38px;
}
.dati-btn {
  background-color: #b90303 !important;
  border-color: #b90303 !important;
  margin-top: 20px;
  margin-bottom: 80px;
}

.btn-primary:hover {
  background-color: #0069d9;
  border-color: #0062cc;
}

#feedback {
  font-weight: bold;
}
.head h1 {
  margin-top: -26px;
  margin-bottom: 36px;
  font-size: 25px;
  margin-left: 0px;
}
.head .pic img {
  width: 677px;
}
</style>
