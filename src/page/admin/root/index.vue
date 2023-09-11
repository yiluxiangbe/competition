<template>
  <div>
    <!-- 标题 -->
    <h4 class="text-center">用户信息管理</h4>
    <!-- 新增学生信息 -->
    <AddButton></AddButton>
    <!-- 分页 -->
    <!-- 这里有两个自定义事件，一个是页码改变，一个是按名字搜索 -->
    <Page @changeCurrentPage="changeCurrent($event)" @nameChange="nameChange($event)"></Page>
    <!-- 用户列表 -->
    <table class="table table-bordered table-striped table-hover">
      <thead>
        <tr>
          <th>用户名</th>
          <th>头像</th>
          <th>email</th>
          <th>性别</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in userlist" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.sex }}</td>
          <!-- 最好都加上取消默认事件 -->
          <td><a href="#" @click.prevent="userInfo(item.id)">详情</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Root'
}
</script>

<style></style>
