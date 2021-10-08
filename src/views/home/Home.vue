<template>
  <div id="home">
    <Header @login="handler()" />
    <div id="main">
      <!-- <Loading v-if="loading==true" /> -->
      <Banner v-if="!getIsLogged" />
      <NewFilm v-else />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
// import Loading from "@/components/Loading";
import Footer from "@/components/Footer";
import Banner from "./children/Banner";
import NewFilm from "../filmpage/NewFilm"; 

import { mapGetters } from "vuex";
import { USER_INFOR } from "@/constants";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      loading: false
    }
  },
  components: {
    Header,
    Banner,
    NewFilm,
    // Loading,
    Footer
  },
    async created() {
    const user = JSON.parse(localStorage.getItem(USER_INFOR));
    if(!user) {
      this.loading = true;
    }
    await this.login(user);
    this.loading = false;
  },

  methods: {
    ...mapActions(["login"])
  },
  computed: {
    ...mapGetters(["getIsLogged"])
  }
};
</script>

<style scoped>
a {
  cursor: pointer;
}
img {
  max-width: 100%;
  display: block;
  object-fit: cover;
}
.container {
  width: 90%;
  margin: 0 auto;
  padding: 0;
}
#main {
  margin-bottom: 0;
}
#home {
  /* background: rgb(17, 16, 16); */
  background-image: url("../../assets/bg4.png");
  /* background-size: cover; */
  background-repeat: repeat;
}
</style>