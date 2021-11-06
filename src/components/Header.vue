<template>
  <div id="header">
    <v-container>
      <div class="header-left">
        <div class="hamburger-menu">
          <div :class="{mark :showMenu}" @click="toggle"></div>
          <div class="menu" :class="{openMenu:showMenu}">
            <button class="btn-close" @click="toggle">
              <i class="fas fa-times"></i>
            </button>
            <ul>
              <li>
                <router-link :to="{ name:'Home' }">Home</router-link>
              </li>
              <li>
                <a href="#">Top IMDB</a>
              </li>
              <li>
                <a href="#">Movies</a>
              </li>
              <li>
                <a href="#">TV Shows</a>
              </li>
              <li>
                <a href="#">Android App</a>
              </li>
              <li>
                <a href="#">Genre</a>
              </li>
              <li>
                <a href="#">Country</a>
              </li>
            </ul>
          </div>
          <i class="fas fa-bars" @click="toggle"></i>
        </div>
        <div class="logo">
          <router-link :to="{name: 'Home'}">
            <a href="#">
              <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt />
            </a>
          </router-link>
        </div>
      </div>
      <div class="header-center">
        <form action="#" @submit.prevent="searchFilm" @keyup.enter="searchFilm">
          <input type="text" placeholder="Enter keywords..." v-model="value" autocomplete="on" />
          <button type="submit">
            <i class="fas fa-search"></i>
          </button>
        </form>
      </div>
      <div class="header-right">
        <div class="login" @click="showForm =!showForm" v-if="getIsLogged === false">
          <i class="fas fa-user"></i>
          <p>Login</p>
        </div>
        <div class="profile" v-if="getIsLogged" @click="dropdown = !dropdown">
          <img
            src="data:image/jpeg;base64,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"
          />
          <ul class="dropdown" v-if="dropdown">
            <li>
              <a>
                <span>
                  <i class="far fa-user-circle"></i>
                </span>My Profile
              </a>
            </li>
            <li>
              <a>
                <span>
                  <i class="far fa-edit"></i>
                </span>Edit Profile
              </a>
            </li>
            <li>
              <a>
                <span>
                  <i class="far fa-envelope"></i>
                </span>Inbox
              </a>
            </li>
            <li>
              <a>
                <span>
                  <i class="fas fa-cog"></i>
                </span>Setting
              </a>
            </li>
            <li>
              <a>
                <span>
                  <i class="far fa-question-circle"></i>
                </span>Help
              </a>
            </li>
            <li>
              <a @click="logout()">
                <span>
                  <i class="fas fa-sign-out-alt"></i>
                </span>Logout
              </a>
            </li>
          </ul>
        </div>
        <!-- @changeForm="toggleForm()" -->
        <Auth :showForm="showForm" @changeForm="showForm= $event" />
      </div>
    </v-container>
  </div>
</template>

<script>
import Auth from "@/views/auth/Auth";
import { mapGetters, mapActions } from "vuex";
import { TOKEN } from "@/constants";

export default {
  data() {
    return {
      value: "",
      showMenu: false,
      showForm: false,
      myProfile: false,
      dropdown: false
    };
  },

  components: {
    Auth
  },

  computed: {
    ...mapGetters(["getIsLogged"])
  },

  methods: {
    ...mapActions(["setIsLogged"]),

    toggle() {
      this.showMenu = !this.showMenu;
    },
    searchFilm() {
      this.getIsLogged
        ? this.$root.$emit("filterTitleFilm", this.value)
        : alert("Từ từ đã,đăng nhập đi ==");
    },
    // chức năng logout, xoá trong localStorage và refresh lại trang
    logout() {
      this.setIsLogged(false);
      localStorage.removeItem(TOKEN);
      this.$router.push({ name: "Home" });
    }
  }
};
</script>

<style scoped>
li {
  list-style: none;
}
img {
  display: block;
  max-width: 100%;
}
#header {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  /* background: #020502; */
  background: transparent;
  color: #ffff;
  z-index: 3;
  transition: all 0.2s;
  padding: 0;
}
#header .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header-left {
  display: flex;
}

.hamburger-menu {
  display: flex;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
}
.hamburger-menu i {
  font-size: 22px;
}
.openMenu {
  left: 0px !important;
}
.closeMenu {
  left: -280px !important;
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
.menu {
  width: 280px;
  background: #111111;
  position: fixed;
  left: -280px;
  top: 0;
  bottom: 0;
  transition: all 0.3s ease-in-out;
  padding: 10px 0;
  z-index: 2 !important;
  box-shadow: 0 5px 5px #111111;
}
.menu ul {
  margin-top: 30px;
}
.menu ul li a {
  color: #fff;
  text-decoration: none;
  text-align: left;
  padding: 14px 10px;
  display: block;
  border-bottom: 1px solid #999;
}
.menu ul li:hover {
  background: #5c5a5a2d;
}
.btn-close {
  position: absolute;
  right: 10px;
  color: #ffff;
}
.logo {
  width: 120px;
}
.header-center form {
  background: #ffff;
}
.header-center form {
  position: relative;
  border-radius: 50px;
}
.header-center input {
  padding: 6px 30px 6px 30px;
  outline: none;
  min-width: 400px;
  border: none;
}
.header-center form button {
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: #111111;
}
.login {
  display: flex;
  cursor: pointer;
}
.login:hover {
  color: #51585e;
}
.login i {
  padding: 0 10px;
  margin: 0;
  vertical-align: middle;
}
.profile {
  position: relative;
  cursor: pointer;
}
.profile:hover .dropdown {
  display: inline-block;
}
.profile img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
}
.dropdown {
  /* display: block; */
  position: absolute;
  left: 0;
  top: calc(100% + 0px);
  width: 200px;
  height: auto;
  opacity: 1;
  z-index: 2;
  overflow: hidden;
  padding-top: 20px;
}
.dropdown::before {
  content: "";
  width: 100%;
  height: 40px;
  top: -20px;
  background: transparent;
}
.dropdown > li a {
  display: inline-block;
  width: 100%;
  background: #fff;
  color: #111111;
  /* border-bottom: 1px solid #ccc !important; */
  cursor: pointer;
  padding: 10px 8px;
  border-left: 3px solid transparent;
  transition: all 0.1s ease-in-out;
}
.dropdown > li a:hover {
  /* background: #468f49; */
  color: #ea4c88;
  border-left: 3px solid #ea4c88;
}
.dropdown > li > a:last-child {
  border-bottom: none;
}
.dropdown > li > a span {
  margin-right: 20px;
}
</style>