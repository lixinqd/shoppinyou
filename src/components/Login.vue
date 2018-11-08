<template>
<div class="login">
     <el-form :model="form" :rules="rules" ref="form" status-icon label-width="80px">
         <img src="../assets/avatar.jpg" alt="">
        <el-form-item label="用户名" prop="username">
             <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
         <el-form-item label="密码" prop="password">
             <el-input v-model="form.password" placeholder="请输入密码" type="password"></el-input>
        </el-form-item>
         <el-form-item>
             <el-button type="primary" @click="login">登录</el-button>
             <el-button @click="reset">重置</el-button>
         </el-form-item>
    </el-form>
</div>
</template>

<script>
// 引入axios用于发送ajax请求
import axios from 'axios'
export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      // 表单验证
      rules: {
        username: [
          { required: true, message: '用户名不能为空', trigger: 'change' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'change' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'change' },
          {
            min: 6,
            max: 12,
            message: '长度在 6 到 12 个字符',
            trigger: 'change'
          }
        ]
      }
    }
  },
  methods: {
    // 重置表单
    reset() {
      this.$refs.form.resetFields()
    },
    // 登录功能
    login() {
      this.$refs.form.validate(valid => {
        if (valid) {
          // 登录成功 发送ajax
          axios({
            url: 'http://localhost:8888/api/private/v1/login',
            method: 'post',
            data: this.form
          }).then(res => {
            if (res.data.meta.status === 200) {
              // 登录成功
              this.$message.success(res.data.meta.msg)
              // 为了实现登录状态保持 将token储存到本地
              localStorage.setItem('token', res.data.data.token)
              // 跳转到主页home组件
              this.$router.push('/home')
              console.log(res)
            } else {
              this.$message.error(res.data.meta.msg)
            }
          })
        } else {
          console.log('表单校验没有通过')
          return false
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  height: 100%;
  background-color: #2d434c;
  overflow: hidden;
  .el-form {
    width: 400px;
    margin: 200px auto;
    background-color: #fff;
    padding: 70px 40px 20px;
    border-radius: 20px;
    position: relative;
    img {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: -80px;
      border-radius: 50%;
      border: 10px solid #fff;
    }
  }
  .el-button:last-child {
    margin-left: 70px;
  }
}
</style>
