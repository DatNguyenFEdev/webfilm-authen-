<template>
  <div class="filmDetailPage" v-if="getIsLogged === true">
    <Header :style="{background:'transparent'}" />
    <div
      class="detailFilm"
      :style="{ backgroundImage:'url('+`http://image.tmdb.org/t/p/w500${detailFilm.backdrop_path}`+')' }"
    >
      <div class="bg-mark"></div>
      <div class="container">
        <div class="card-film">
          <div>
            <img :src="`http://image.tmdb.org/t/p/w500${detailFilm.poster_path}`" />
          </div>
        </div>
        <div class="infor-film">
          <h1 class="name-film">
            {{detailFilm.title }}
            <span>({{detailFilm.release_date}})</span>
          </h1>
          <div class="type-film">
            <p>
              {{detailFilm.releaseDate}}
              <span>({{detailFilm.original_language}})</span>
            </p>
            <div class="vote-count">
              <label for="file">Vote count: {{detailFilm.vote_average}}/10</label>
              <progress
                id="file"
                :value="detailFilm.vote_average"
                max="10"
              >{{detailFilm.vote_average}}</progress>
            </div>
            <div class="actions">
              <ul>
                <li>
                  <i class="fas fa-ellipsis-v"></i>
                </li>
                <li :class="{red: clicked}" @click='clicked = !clicked' >
                  <i class="fas fa-heart"></i>
                </li>
                <li>
                  <i class="fas fa-bookmark"></i>
                </li>
                <li>
                  <i class="fas fa-star"></i>
                </li>
                <li @click="openVideo = true">
                  <i class="fas fa-play"></i>
                  <span>Play trailer</span>
                </li>
              </ul>
              <VideoTrailer
                :filmId="filmId"
                :openVideo="openVideo"
                @closeVideo="openVideo = $event"
              />
            </div>
            <div class="overview">
              <h2>Overview</h2>
              <p>{{detailFilm.overview}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="partner">
      <div class="container">
        <h2>Partner</h2>
        <div class="list-partner">
          <div
            class="item-partner"
            v-for="partner in detailFilm.production_companies"
            :key="partner.id"
          >
            <img :src="`http://image.tmdb.org/t/p/w300${partner.logo_path}`" />
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <SimilarFilm/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Header from "@/components/Header";
import VideoTrailer from "./child/VideoTrailer";
import SimilarFilm from "./child/SimilarFilm";
import axios from "axios";
import { BASE_URL, API_KEY } from "@/constants/index.js";
export default {
  data() {
    return {
      openVideo: false,
      detailFilm: {},
      filmId: "",
      clicked: false
    };
  },

  computed: {
    ...mapGetters(["getIsLogged"])
  },
  
  async created() {
    
    const filmId = this.$route.params.film_id;
    this.filmId = filmId;
    // call api get detail film
    const urlDetaiFilm =
      BASE_URL +
      "/movie/" +
      filmId +
      "?sort_by=popularity.desc&" +
      API_KEY +
      "&language=en-US";
    const getDetailFilm = await axios.get(urlDetaiFilm);
    this.detailFilm = getDetailFilm.data;
  },
  mounted() {
    // this.filmId = this.$route.params.film_id;
  },
  methods: {},
  components: {
    Header,
    VideoTrailer,
    SimilarFilm
  }
};
</script>

<style scoped>
.red {
  color: rgba(247, 52, 52, 0.925);
}
h2 {
  margin-bottom: -10px;
}
.container {
  width: 90%;
  margin: 0 auto;
  padding: 0;
}
.filmDetailPage {
  background: #1A1E21;
  color: #fff;
  height: auto;
    top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
}
.bg-mark {
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: linear-gradient(
    to top,
    rgba(9.41%, 10.98%, 12.16%, 1) 0%,
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
  /* background-position: right -200px top; */
  width: 100%;
  height: auto;
  /* margin-top: 64px; */
  padding: 156px 0 30px 0;
  position: relative;
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
  max-width: 300px;
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
  display: flex;
}
.actions ul li {
  list-style: none;
  border: transparent;
  border-radius: 50%;
  width: 46px;
  height: 46px;
  margin: 0 6px;
  background: #081c22;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 14px 20px rgba(0, 0, 0, 0.25), 0 6px 6px rgba(0, 0, 0, 0.22);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
.actions ul li:not(li:last-child):hover {
  box-shadow: none;
  border: 1px solid rgba(53, 53, 53, 0.466);
}
.actions ul li:first-child {
  margin-left: 0;
}
.actions ul li i {
  font-size: 0.1rem;
}
.actions ul li:last-child {
  width: auto;
  padding: 0 20px;
  border-radius: 10px;
  background: transparent;
  border: none;
  box-shadow: none;
}
.actions ul li:last-child:hover {
  color: #ccc;
}
.actions ul li:last-child span {
  margin-left: 10px;
}
/* ======================partner============ */
.partner {
  padding: 30px 0;
}
.list-partner {
  height: auto;
  width: 100%;
  display: flex;
  gap: 0 30px;
  align-items: center;
  overflow: hidden;
  border-bottom: 1px solid rgb(129, 129, 129);
  padding: 30px 0;
}
.item-partner {
  width: 10%;
  height: 100%;
}
.item-partner img {
  max-width: 100%;
  height: auto;
  object-fit: cover;
}
</style>