<template>
  <div class="page-register">
    <div class="header">
      <header>
        <a class="site-logo" href="http://www.meituan.com">美团</a>
        <div class="login">
          <span class="bold">已有美团账号？</span>
          <router-link :to="{name: 'login'}">登录</router-link>
        </div>
      </header>
    </div>
    <div class="content">
      <el-form
        :model="registerForm"
        status-icon
        :rules="rules"
        ref="registerForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="userName">
          <el-input type="text" v-model="registerForm.userName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="registerForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="rePassword">
          <el-input type="password" v-model="registerForm.rePassword" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('registerForm')">同意以下协议并注册</el-button>
            <a class="f1" href="http://www.meituan.com/about/terms" target="_blank">《美团网用户协议》</a>
        </el-form-item>
      </el-form>
    </div>
    <footer class="footer--mini">
      <p class="copyright">
          ©<a class="f1" href="https://www.meituan.com">meituan.com</a>&nbsp;
          <a class="f1" target="_blank" href="http://www.miibeian.gov.cn/">京ICP证070791号</a>&nbsp;
          <span class="f1">京公网安备11010502025545号</span>
      </p>
    </footer>
  </div>
</template>

<script>
import GetApi from 'ajax'
export default {
  data() {
    const checkUserName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
          console.log(checkUserName)
        if (
          this.registerForm.userName.length < 4 ||
          this.registerForm.userName.length > 16
        ) {
          callback(new Error("用户名必须为4-16位的字母数字下划线组成"));
        } else {
             callback();
        }
      }
    };
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.registerForm.rePassword !== "") {
          this.$refs.registerForm.validateField("rePassword");
        }
        callback();
      }
    };
    const validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.registerForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      registerForm: {
        userName: "",
        password: "",
        rePassword: ""
      },
      rules: {
        password: [{ validator: validatePass, trigger: "blur" }],
        rePassword: [{ validator: validatePass2, trigger: "blur" }],
        userName: [{ validator: checkUserName, trigger: "blur", type: "string" }]
      }
    };
  },
  methods: {
    submitForm () {
      this.$refs[formName].validate((valid) => {
          if (valid) {
              console.log(this.registerForm)
              GetApi.register({
                  params: this.registerForm
              }).then((res) => {
                  console.log(res);
                  if (res.data.status == 'success') {
                      this.$message({
                        message: res.data.msg,
                        type: 'success'
                    });
                      this.$router.push({name: 'login'})
                  }
              })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
    }
  }
};
</script>
<style lang='scss' scoped>
@import "~css/register/index.scss";
</style>
 