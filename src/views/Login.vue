<template>
  <div class="login">
    <div class="login-div">
      <el-form ref="form" :label-position="labelPosition" :model="form" label-width="80px" :rules="rules" status-icon>
      <!-- <img src="../assets/login_bg.png" alt=""> -->
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password" class="password_input">
        <el-input v-model="form.password" type="password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">登录</el-button>
      </el-form-item>
    </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Ref } from 'vue-property-decorator'
// import { loginApi } from '@/api'

@Component({
  name: 'Login'
})
export default class extends Vue {
  // @Ref('Form') readonly Form!: Form

  private labelPosition: string = 'top'
  // 表单数据
  private form = {
    username: '',
    password: ''
  }

  // 表单规则
  private rules = {
    account: [{ required: true, message: '请输入帐号', trigger: 'change' }],
    password: [{ required: true, message: '请输入密码', trigger: 'change' }]
  }
}
</script>

<style lang="less">
.login {
  width: 100%;
  height: 100%;
  background-image: url(../assets/login_bg.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  overflow: hidden;
  position: relative;
  .login-div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .el-form {
      width: 512px;
      background-color: #fff;
      padding: 64px 17px 15px 16px;
      border-radius: 16px;
      position: relative;
      .el-form-item {
        margin-bottom: 16px;
      }
      img {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 32px;
      }
      .el-button--primary {
        width: 100%;
        margin-top: 10px;
      }
    }
  }
  // 对form表单样式的修改
  .el-form--label-top .el-form-item__label {
    padding: 0;
    line-height: 30px;
    color: #a0a0a0;
    font-size: 12px;
  }
  .el-radio__inner {
    border-radius: 2px;
    background-color: #e0e0e0;
  }
  .el-radio__label {
    color: #a0a0a0;
    font-size: 12px;
  }
}
</style>
