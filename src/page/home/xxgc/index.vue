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
  </div>
</template>

<script>
export default {
  name: 'Xxls'
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
</style>
