<template>
  <div class="home-container">
    <!-- 头部 -->
    <MyHeader></MyHeader>

    <!-- 主体部分 -->
    <div class="home-main-box">
      <MyAside></MyAside>
      <div class="home-main-body">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
// 头部区域组件
import MyHeader from './header/index.vue'
// 左侧边栏组件
import MyAside from './side/index.vue'

export default {
  name: 'Admin',
  // 注册组件
  components: {
    MyHeader,
    MyAside
  }
}
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
  display: flex;
  flex-direction: column;

  .home-main-box {
    height: 100%;
    display: flex;
    .home-main-body {
      padding: 15px;
      flex: 1;
    }
  }
}
</style>
