<template>
  <div class="user-login">
    <div class="login-background"></div>
    <div class="content-wrapper">
      <h2 class="slogan">欢迎使用 <br />研发管理系统</h2>
      <div class="login-box">
        <h4>登录</h4>
        <el-form ref="form" :model="form" autocomplete="on" label-width="50px">
          <el-form-item label="账号" prop="username">
            <el-input
              v-model="form.username"
              placeholder="请输入账号"
              autocomplete="on"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              type="password"
              v-model="form.password"
              placeholder="请输入密码"
              autocomplete="on"
              @keyup.enter.native="onSubmit"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              class="login-btn"
              type="primary"
              round
              @click.native.prevent="onSubmit"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
      this.$refs.form.validate(valid => {
        if (valid) {
          this.$store.commit("SET_USER_INFO", "1234567890"); // 1.登陆成功，vuex设置用户id
          sessionStorage.setItem("userUuid", "1234567890"); // 2.session同时存储id，手动刷新页面时用它重写vuex用户id
          // this.$router.addRoutes(this.userDynamicRouters); // 3.追加动态路由
          this.$router.push({ path: "/menu1" }); // 4.跳转到首页
        } else {
          this.$message.warning("请完善登录信息！");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="less" scope>
.user-login {
  position: relative;
  height: 100vh;
}
.login-background {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background-size: cover;
  background-image: url(~@assets/login-background.png);
}
.content-wrapper {
  position: absolute;
  top: -100px;
  left: 0;
  right: 0;
  bottom: 0;
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .slogan {
    text-align: center;
    color: #fff;
    font-size: 36px;
    letter-spacing: 2px;
    line-height: 48px;
  }
  .login-box {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 30px 40px;
    background: rgb(255, 255, 255);
    border-radius: 6px;
    box-shadow: rgb(238, 238, 238) 1px 1px 2px;
    h4 {
      margin: 0px 0px 20px;
      text-align: center;
      color: rgb(48, 128, 254);
      letter-spacing: 12px;
    }
  }
}
.login-btn {
  width: 100%;
}
</style>
