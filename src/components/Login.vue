<template>
<div class="login">
     <el-form :model="form" label-width="80px" class="demo-ruleForm">
         <img src="../assets/avatar.jpg" alt="">
        <el-form-item label="用户名" prop="name">
             <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
         <el-form-item label="密码" prop="name">
             <el-input v-model="form.password" placeholder="请输入密码"></el-input>
        </el-form-item>
         <el-form-item>
             <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
             <el-button @click="resetForm('ruleForm')">重置</el-button>
         </el-form-item>
    </el-form>
</div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
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
