<template>
  <div class="filmDetailPage" v-if="getIsLogged === true">
    <Header :style="{background:'black'}" />
    <div
      class="detailFilm"
      :style="{ backgroundImage:'url('+`http://image.tmdb.org/t/p/w500${film.backdrop_path}`+')' }"
    >
      <div class="bg-mark"></div>
      <div class="container">
        <div class="card-film">
          <div>
            <img :src="`http://image.tmdb.org/t/p/w500${film.pathUrl}`" />
          </div>
        </div>
        <div class="infor-film">
          <h1 class="name-film">
            {{film.title }}
            <span>({{film.releaseDate.slice(0,4)}})</span>
          </h1>
          <div class="type-film">
            <p>
              {{film.releaseDate}}
              <span>({{film.original_language}})</span>
            </p>
            <div class="vote-count">
              <label for="file">Vote count: {{film.vote_average}}/10</label>
              <progress id="file" :value="film.vote_average" max="10">{{film.vote_average}}</progress>
            </div>
            <div class="actions">
              <ul>
                <li><i class="fas fa-ellipsis-v"></i></li>
                <li><i class="fas fa-heart"></i></li>
                <li><i class="fas fa-bookmark"></i></li>
                <li><i class="fas fa-star"></i></li>
              </ul>
            </div>
            <div class="overview">
              <h2>Overview</h2>
              <p>{{film.overview}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Header from "@/components/Header";

export default {
  data() {
    return {
      film: {}
    };
  },

  computed: {
    ...mapGetters(["getListFilm", "getIsLogged"])
  },

  created() {
    const filmId = this.$route.params.film_id;

    // call api get detail

    this.film = this.getListFilm.find(film => film.id == filmId);
  },

  components: {
    Header
  }
};
</script>

<style scoped>
.container {
  width: 90%;
  margin: 0 auto;
  padding: 0;
}
.bg-mark {
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: linear-gradient(
    to right,
    rgba(9.41%, 10.98%, 12.16%, 1) 150px,
    rgba(9.41%, 10.98%, 12.16%, 0.84) 100%
  );
  transition: 0.7s;
  position: absolute;
  z-index: -1;
  padding-top: 30px;
}
.detailFilm {
  color: #fff;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right -200px top;
  width: 100%;
  height: 100%;
  margin-top: 64px;
  padding: 26px 0;
  position: absolute;
  z-index: 2;
}
.detailFilm .container {
  display: flex;
}
.detailFilm::after {
  background: rgba(250, 246, 246, 0.6);
  z-index: 999;
  content: "";
  display: block;
  width: 100%;
  background: red;
  z-index: 2;
  background-size: cover;
}
.card-film {
  flex-grow: 1;
  /* background: red; */
}
.card-film > div {
  width: 300px;
  height: 100%;
}
.card-film > div img {
  object-fit: cover;
  max-width: 100%;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  border-radius: 10px;
}
.infor-film {
  flex-grow: 11;
  padding-top: 20px;
  padding-left: 40px;
}
.name-film {
  display: block;
}
.name-film span {
  color: #ccc;
  font-weight: normal;
}
.type-film .vote-count {
  margin-bottom: 20px;
}
.vote-count label {
  margin-right: 20px;
}
.actions {
  margin-bottom: 30px;
}
.actions ul {
  display:flex;
}
.actions ul li {
  list-style: none;
  border: 1px solid rgba(53, 53, 53, 0.466);
  border-radius:50%;
  width: 46px;
  height: 46px;
  margin: 0 6px;
  background: #081C22;
  display: flex;
  justify-content:center;
  align-items: center;
  box-shadow: 0 14px 20px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  cursor: pointer;
}
.actions ul li:first-child {
  margin-left: 0;
}
.actions ul li i {
    font-size: 0.1rem;
}
</style>