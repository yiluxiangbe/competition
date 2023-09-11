<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="form-signin">
          <h1>登录</h1>
          <form onsubmit="return false;" autocomplete="off">
            <div class="mb-3">
              <label for="username" class="form-label">用户名</label>
              <input v-model="username" type="text" class="form-control" id="username" name="username" required />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">密码</label>
              <input v-model="password" type="password" class="form-control" id="password" name="password" required />
            </div>
            <div class="mb-3">
              <label class="form-check-label"> </label>
            </div>
            <button @click="submitLogin()" type="submit" class="btn btn-primary">登录</button>
          </form>
          <hr />
          <div class="text-center">
            <a href="#">Forgot password?</a>
          </div>
          <hr />
          <!-- <div class="text-center">Don't have an account? <a href="#">Sign up</a></div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
// 导入封装好的请求
import { reqLogin } from '@/api/index'
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async submitLogin() {
      try {
        const result = await reqLogin({
          username: this.username,
          password: this.password
        })
        console.log('login：' + JSON.stringify(result))
        console.log('准备跳转')
        this.$router.push({
          path: '/home'
        })
      } catch (error) {
        console.log('error:' + error)
      }

      // 跳转路由，跳转到home
    }
  }
}
</script>

<style>
body {
  background: linear-gradient(200deg, #f3e7e9, #e3eeff);
}
.form-signin {
  max-width: 400px;
  margin: auto;
  padding: 15px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
  margin-top: 80px;
}
.form-signin h1 {
  text-align: center;
  margin-bottom: 30px;
}
.form-signin label {
  font-weight: bold;
}
.form-signin input[type='text'],
.form-signin input[type='password'],
.form-signin select {
  margin-bottom: 20px;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  width: 100%;
}
.form-signin input[type='submit'] {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
.form-signin input[type='submit']:hover {
  background-color: #0069d9;
}
.form-check-input {
  margin-right: 5px;
}
</style>
