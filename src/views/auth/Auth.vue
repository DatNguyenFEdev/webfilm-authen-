<template>
  <div id="auth" v-if="getIsLogged==false">
    <div :class="{mark:showForm}" @click="toggle()"></div>
    <div id="login" v-if="isLogin==true">
      <div class="login-form handleForm" :class="{openForm: showForm}">
        <button class="btn-close">
          <i class="fas fa-times" @click="toggle()"></i>
        </button>
        <h1>Login</h1>
        <form
          action="#"
          @submit.prevent="handleSubmitFormLogin()"
          @keypress.enter="handleSubmitFormLogin()"
        >
          <div class="form-group">
            <input type="email" placeholder="Email hoặc số điện thoại" v-model="loginForm.email" />
          </div>
          <div class="form-group">
            <input type="password" placeholder="Mật khẩu" v-model="loginForm.password" />
          </div>
          <div class="form-group">
            <div>
              <v-checkbox label="Remember me" color="red" value="red" hide-details></v-checkbox>
            </div>
            <div>
              <a href="#">Forgot password?</a>
            </div>
          </div>
          <!-- <div class="form-group">
                        <a href="#">Đăng nhập bằng google</a>
          </div>-->
          <input type="submit" value="Đăng nhập" />
          <p>
            Don't have an account?
            <span @click="isLogin=false">Register</span>
          </p>
        </form>
      </div>
    </div>
    <div id="register" v-else>
      <div class="register-form handleForm" :class="{openForm: showForm}">
        <button class="btn-close">
          <i class="fas fa-times" @click="toggle()"></i>
        </button>
        <h1>Register</h1>
        <form
          action="#"
          @submit.prevent="handleSubmitFormRegister()"
          @keypress.enter="handleSubmitFormRegister()"
        >
          <div class="form-group">
            <input type="text" placeholder="Name" v-model="registerForm.name" />
          </div>
          <div class="form-group">
            <input type="email" placeholder="Email hoặc số điện thoại" v-model="registerForm.email" />
          </div>
          <div class="form-group">
            <input type="password" placeholder="Mật khẩu" v-model="registerForm.password" />
          </div>
          <div class="form-group">
            <input
              type="password"
              placeholder="Nhập lại mật khẩu"
              v-model="registerForm.confirmPassword"
            />
          </div>
          <input type="submit" value="Đăng kí" />
          <p>
            Have an account?
            <span @click="isLogin=true">Login</span>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { USER_INFOR } from "@/constants";

export default {
  props: ["showForm"],
  data() {
    return {
      isLogin: true,
      // showForm: false,
      loginForm: {
        email: "",
        password: ""
      },
      registerForm: {
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
      }
    };
  },

  computed: {
    ...mapGetters(["getIsLogged"])
  },

  methods: {
    ...mapActions(["login", "register"]),
    // close/ open form login/register
    toggle() {
      this.showForm = false
      this.$emit("changeForm", this.showForm);
    },
    // lưu thông tin ng dùng đăng kí vào json server
    async handleSubmitFormRegister() {
      await this.register(this.registerForm);
      this.isLogin = true;
    },
    // so sánh thông tin ng dùng nhập từ form login vs thông tin những accountRegister
    //Nếu trùng ok=> login
    //Nếu kh hiển thị thông báo sai tài khoản, mật khẩu
    async handleSubmitFormLogin() {
      await this.login(this.loginForm);

      if (!this.getIsLogged) return alert("Tài khoản hoặc mật khẩu không đúng");

      localStorage.setItem(
        USER_INFOR,
        JSON.stringify({
          email: this.loginForm.email,
          password: this.loginForm.password
        })
      );
    }
  }
};
</script>

<style scoped>
a,
span {
  color: rgb(172, 170, 170);
}
#login {
  display: flex;
  cursor: pointer;
}
.mark {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.4);
}
.handleForm {
  width: auto;
  min-height: 500px;
  padding: 30px 50px;
  background: #2c3338;
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translateY(-50%);
  transform: translateX(-50%);
  z-index: 2;
  text-align: center;
  visibility: hidden;
  opacity: 0;
  border-radius: 12px;
}
.openForm {
  visibility: visible;
  opacity: 1;
}
.handleForm h1 {
  text-align: center;
  margin-bottom: 24px;
}
.handleForm p {
  margin-top: 20px;
}
.handleForm > button {
  position: absolute;
  right: 14px;
  top: 10px;
}
.handleForm > button i {
  font-size: 22px;
}
.handleForm form > p {
  cursor: pointer;
}
.handleForm form > p > span:hover {
  text-decoration: underline;
}
.handleForm form input {
  background: #3b4148;
  color: #fff;
  font-size: 20px;
  padding: 10px 16px;
  min-width: 340px;
  border-radius: 4px;
  outline: none;
}
.handleForm form input:not(input[type="submit"]):hover {
  background: #434a52;
}
.handleForm input[type="submit"] {
  background: #ea4c88;
  color: #eee;
  margin-top: 30px;
}
.form-group:nth-child(3) {
  display: flex;
  justify-content: space-between;
}
.form-group {
  margin-bottom: 14px;
}
.form-group:nth-child(3) .v-input {
  display: inline-block;
  color: rgb(172, 170, 170);
}
.v-input {
  margin: 0;
  padding: 0;
}
.form-group:nth-child(3) label {
  margin-top: 0;
  padding: 0;
}
</style>