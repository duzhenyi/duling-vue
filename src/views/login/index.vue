<template>
  <div class="login-container">
    <div class="login-layout">
      <a-divider>Duling-Admin</a-divider>
      <a-form id="form-login" :form="form" class="login-form" @submit="handleSubmit">
        <a-form-item>
          <a-input
            v-decorator="['account',{ rules: [{ required: true, message: '请输入账号' }] },]"
            placeholder="请输入账号"
          >
            <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            v-decorator="['password',{ rules: [{ required: true, message: '请输入密码' }] },]"
            type="password"
            placeholder="请输入密码"
          >
            <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-checkbox v-decorator="['remember',{valuePropName: 'checked',initialValue: true,},]">记住账号</a-checkbox>
          <a class="login-form-forgot" href>
            忘记密码
            <a-icon type="question" />
          </a>
          <a-button type="primary" html-type="submit" class="login-form-button">登录</a-button>
          <div class="anticon-layout">
            <a-divider class="anticon-divider">第三方快捷登录</a-divider>
            <a>
              <a-icon class="anticon-icon" type="github" />
            </a>
            <a>
              <a-icon class="anticon-icon" type="qq" />
            </a>
            <a>
              <a-icon class="anticon-icon" type="wechat" />
            </a>
            <a>
              <a-icon class="anticon-icon" type="weibo" />
            </a>
            <a>
              <a-icon class="anticon-icon" type="alipay" />
            </a>
            <a>
              <a-icon class="anticon-icon" type="zhihu" />
            </a>
          </div>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  components: {},
  // beforeCreate() {

  // },
  data() {
    return {
      form: this.$form.createForm(this, { name: "normal_login" })
    };
  },
  created() {},
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.login-container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: #334354;
  // background-image: url("~@/assets/loginbg.jpg");
  background-size: 100% 100%;
}
.login-layout {
  margin: 0 auto;
  max-width: 400px;
  padding: 25px;
  border-radius: 5px;
  -webkit-box-shadow: -4px 5px 10px rgba(0, 0, 0, 0.4);
  box-shadow: -4px 5px 10px rgba(0, 0, 0, 0.4);
  background: #fff;
}

#form-login .login-form {
  max-width: 400px;
}
#form-login .login-form-forgot {
  float: right;
  color: #999;
  font-size: 12px;
}
#form-login .login-form-button {
  width: 100%;
}
.anticon-layout {
  min-width: 300px;
  .anticon-divider {
    color: #999;
    font-size: 12px;
  }
  .anticon-icon {
    font-size: 24px;
    margin: 12px 0 8px;
    transition: transform 0.3s ease-in-out;
    will-change: transform;
    width: 16.66%;
  }
}
</style>
