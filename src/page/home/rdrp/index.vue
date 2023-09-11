<template>
  <div>
    <!-- 顶部学校标志 -->
    <div class="school-mark">
      <img src="https://www.ctbu.edu.cn/image/logob.png" alt="" />
      <div class="info">
        <router-link to="/admin"><span>学习党的二十大专题网站</span></router-link>
      </div>
    </div>
    <div class="banner"></div>
    <div class="nav">
      <div class="container">
        <ul class="other-nav">
          <li><router-link to="/home">首页</router-link></li>
          <li><router-link to="/ddcj">党的成就</router-link></li>
          <li><router-link to="/rdrp">热点热评</router-link></li>
          <li><router-link to="/xxls">学习路上</router-link></li>
          <li><router-link to="/zjgs">走进工商</router-link></li>
        </ul>
      </div>
    </div>
    <div class="list">
      <div class="container">
        <div class="list-main">
          <div class="list-tit">
            <p class="title">热点热评</p>
            <div class="local">
              <table class="winstyle276183" cellspacing="0" cellpadding="0">
                <tbody>
                  <tr>
                    <td nowrap="">当前位置： <router-link to="/home">首页</router-link><span class="splitflagstyle276183">&gt;&gt;</span><router-link to="/rdrp">热点热评</router-link></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="list-text">
            <ul>
              <ul>
                <li v-for="item in hotList" :key="item.id">
                  <a :href="item.url" target="_blank">
                    <div class="info-main">
                      <p class="info-title">{{ item.keyword }}</p>
                    </div>
                  </a>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reqHotList } from '@/api/index'
export default {
  name: 'Rdrp',
  data() {
    return {
      hotList: []
    }
  },
  methods: {
    // 获取热点数据
    async getHotList() {
      const token = localStorage.getItem('token')
      const result = await reqHotList(token)
      this.hotList = result.data.data
    }
  },
  mounted() {
    this.getHotList()
  }
}
</script>

<style>
.banner {
  height: 600px;
  min-width: 1200px;
  background: url(../image/guanwangtu.jpg) no-repeat top center;
  background-size: cover;
}

/* 顶部学校标志 */
.school-mark {
  width: 100%;
  height: 100px;
  background-color: #902828;
  opacity: 1;
  margin-top: -60px;
}
.school-mark img {
  display: inline-block;
  margin-top: 15px;
  margin-left: 10px;
}
.school-mark .info {
  display: inline-block;
  margin-left: 800px;
  vertical-align: middle;
  margin-top: 25px;
}
.school-mark .info span {
  color: #fff;
}
.nav {
  height: 60px;
  min-width: 1200px;
  background-color: #ed1e1e;
}
.nav .home li {
  float: left;
  position: relative;
  left: 180px;
  top: -14px;
}
.nav .home li a {
  color: #333333;
  font-size: 26px;
}
.nav .other-nav {
  float: right;
}
.nav .other-nav li {
  float: left;
}
.nav .other-nav li:hover {
  background-color: rgb(235, 239, 41);
}
.nav ul li a {
  padding: 10px 26px;
  line-height: 50px;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
}
.list {
  min-width: 1200px;
  position: relative;
  top: 40px;
}
.list .list-tit {
  position: relative;
  overflow: hidden;
  font-size: 0px;
  width: 100%;
  white-space: nowrap;
  line-height: 36px;
  margin: -5px 0 38px;
}
.list .list-tit::after {
  content: '';
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  height: 1px;
  background: #e99430;
  position: relative;
  top: -7px;
}
.list .list-tit .title {
  font-size: 28px;
  color: #910009;
  line-height: 50px;
  position: relative;
  display: inline-block;
  padding: 0 26px 0 0;
}
.list .list-tit .title:after {
  content: '';
  display: block;
  height: 28px;
  width: 2px;
  background: #e99430;
  position: absolute;
  top: 14px;
  right: 0;
}
.list .list-tit .local {
  position: absolute;
  right: 0px;
  top: 0px;
  color: #696969;
  font-size: 14px;
}
.list-text ul li {
  border-bottom: #dedede solid 1px;
}
.list-text ul li a {
  display: inline-block;
  padding: 30px 0px;
}
.list-text .info-date {
  width: 140px;
  text-align: right;
  float: left;
}
.list-text .info-date p {
  font-size: 14px;
  color: #910009;
  line-height: 32px;
}
.list-text .info-date p:first-child {
  font-size: 24px;
}
.list-text .info-date:after {
  content: '';
  display: block;
  height: 2px;
  width: 53px;
  background: #e99430;
  float: right;
}
.list-text img {
  width: 280px;
  height: 180px;
  float: left;
}
.list-text .info-main {
  position: relative;
  margin: -4px 0 0 207px;
}
.list-text .info-news {
  position: relative;
  margin: -4px 0 0 317px;
}
.list-text .info-news-title {
  line-height: 40px;
}
.list-text .info-main .info-title {
  line-height: 40px;
}
.list-text .info-abs {
  font-size: 14px;
  color: #888;
  line-height: 26px;
}
.list-text .info-news-date p {
  font-size: 14px;
  color: #828282;
  position: relative;
  padding-left: 36px;
  line-height: 90px;
}
.list-text .info-news-date p:before {
  content: '';
  display: block;
  width: 18px;
  height: 18px;
  position: absolute;
  top: 36px;
  left: 0;
}
</style>
