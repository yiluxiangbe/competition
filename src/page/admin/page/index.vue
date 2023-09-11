<template>
  <!-- 这个分页组件可以经常来使用 -->
  <div class="page">
    <input v-model.trim="keyword" class="form-control form-control-lg" type="text" placeholder="请输入查询信息" aria-label=".form-control-lg example" />
    <button class="btn btn-primary" type="submit" @click.prevent="searchAnswer()">搜索</button>
    <div class="page_nav">
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a @click.prevent="previousCurrent()" class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item"><a class="page-link" href="#" @click.prevent="changeCurrentPage($event)">1</a></li>
          <li class="page-item"><a class="page-link" href="#" @click.prevent="changeCurrentPage($event)">2</a></li>
          <li class="page-item"><a class="page-link" href="#">...</a></li>
          <li class="page-item">
            <a class="page-link" href="#" @click.prevent="changeCurrentPage($event)">{{ lastCurrent }}</a>
          </li>
          <li class="page-item">
            <a @click.prevent="nextCurrent()" class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <p>第 {{ pageCurrent }} 页</p>
  </div>
</template>

<script>
export default {
  name: 'Page',
  data() {
    return {
      lastCurrent: 3,
      pageCurrent: 1,
      keyword: ''
    }
  },
  methods: {
    // 页数改变函数
    changeCurrentPage(e) {
      if (Number(e.target.innerHTML) >= 1 <= 2) {
        this.lastCurrent = 3
      }
      // console.log(e.target.innerHTML)
      if (Number(e.target.innerHTML) !== this.pageCurrent) {
        this.pageCurrent = Number(e.target.innerHTML)
        // 这里的e.target.innerHTML类型是字符串，而我们需要的是数字型
        // console.log('innerhtml' + typeof Number(e.target.innerHTML))
        // 发送给父组件信息
        this.$emit('changeCurrentPage', this.pageCurrent)
      }
    },
    // 请求上一页数据
    previousCurrent() {
      if (this.pageCurrent > 1) {
        if (this.pageCurrent > 3) {
          this.lastCurrent--
        }
        this.pageCurrent = this.pageCurrent - 1
        // 发送给父组件信息
        console.log('pageCurrent:' + this.pageCurrent)
        this.$emit('changeCurrentPage', this.pageCurrent)
      }
    },
    // 请求下一页数据
    nextCurrent() {
      if (this.pageCurrent >= 0) {
        if (this.pageCurrent >= 3) {
          this.lastCurrent++
        }
        this.pageCurrent = this.pageCurrent + 1
        // 发送给父组件信息
        this.$emit('changeCurrentPage', this.pageCurrent)
      }
    },
    // 按名字来搜索
    searchAnswer() {
      // 如果不为空，则返回关键字进行模糊查询
      if (this.keyword) {
        // 有两个名字
        // console.log('keyword: ' + this.keyword)
        this.$emit('nameChange', this.keyword)
        // 点击搜索一次需要清零
        this.keyword = ''
      }
    }
  }
}
</script>

<style></style>
