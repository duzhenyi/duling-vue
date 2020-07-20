<template>
  <div class="login-container">
    <div class="login-layout">
      <a-divider>Duling-Admin</a-divider>
      <a-form id="form-login" :form="form" class="login-form" @submit="handleSubmit">
        <a-form-item>
          <a-input
            v-decorator="['account',{ initialValue:'admin',rules: [{ required: true, message: '请输入账号' }] },]"
            placeholder="请输入账号"
          >
            <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input-password
            v-decorator="['password',{ initialValue:'123456',rules: [{ required: true, message: '请输入密码' }] },]"
            type="password"
            placeholder="请输入密码"
          >
            <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
          </a-input-password>
        </a-form-item>
        <a-form-item>
          <a-checkbox
            v-decorator="['remember',{valuePropName: 'checked',initialValue: true,},]"
          >记住账号</a-checkbox>
          <a class="login-form-forgot" href>
            忘记密码
            <a-icon type="question" />
          </a>
          <a-button
            type="primary"
            html-type="submit"
            :loading="loginBtnLoading"
            :disabled="loginBtnLoading"
            class="login-form-button"
          >登录</a-button>
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
// MD5加密
import md5 from "md5";
// 当我们的组件需要获取多个状态的时候，将这些状态都声明为计算属性会有些重复和冗余，
// 为了解决这个问题，我们可以使用mapState的辅助函数来帮助我们生成计算属性。
// mapActions/mapState函数返回的是一个对象，
// 我们需要使用一个工具函数将多个对象合并为一个，这样就可以使我们将最终对象传给computed属性
import { mapActions } from "vuex";
export default {
  name: "Login",
  components: {},
  data() {
    return {
      loginBtnLoading: false,
      form: this.$form.createForm(this, { name: "normal_login" }),
      redirect: ''
    };
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = (route.query && route.query.redirect)?route.query && route.query.redirect:'/';
      },
      immediate: true
    }
  },
  created() {
    console.log(this.$store);
  },
  methods: {
    // mapActions 将 this.login(values) 映射为 this.$store.dispatch('login',values)
    ...mapActions(["login"]),
    handleSubmit(e) {
      // 阻止冒泡事件
      e.preventDefault();
      // 提交按钮禁用以及刷新状态
      this.loginBtnLoading = true;
      let that = this;
      // 进行form表单验证，查看每个表单项里面的rule
      this.form.validateFields((err, values) => {
        if (err) {
          console.log("Received values of form: ", values);
        } else {
          values.password = md5(values.password);
          this.login(values)
            .then(res => {
              that.$router.push({ path: that.redirect }).catch(error => {});
              that.loginBtnLoading = false;
            })
            .catch(err => {
              this.loginBtnLoading = false;
              console.log(err);
            })
            .finally(() => {});
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
