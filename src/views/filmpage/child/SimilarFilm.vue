<template>
  <div class="similar-film">
    <h2>Recommendations</h2>
    <div class="list-similar-film">
      <div
        class="item-similar-film"
        v-for="itemSimilarFilm in similarFilm"
        :key="itemSimilarFilm.id"
      >
        <div class="poster">
          <img :src="`http://image.tmdb.org/t/p/w200${itemSimilarFilm.poster_path}`" />
          <div class="infor-film">
            <i class="fas fa-calendar-alt"></i>
            {{itemSimilarFilm.release_date}}
          </div>
        </div>
        <h3>{{itemSimilarFilm.title}}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import { BASE_URL, API_KEY } from "@/constants/index.js";
import axios from "axios";
export default {
  data() {
    return {
      similarFilm: []
    };
  },
  async created() {
    const filmId = this.$route.params.film_id;
    this.filmId = filmId;
    // call api get similar film
    const urlSimilarFilm =
      BASE_URL + "/movie/" + filmId + "/similar?" + API_KEY + "&language=en-US";
    const getSimilarFilm = await axios.get(urlSimilarFilm);
    this.similarFilm = getSimilarFilm.data.results;
    console.log(this.similarFilm);
  }
};
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
}
.similar-film {
  padding: 30px 0;
  border-bottom: 1px solid #999;
}
.list-similar-film {
  display: flex;
  gap: 0 10px;
  width: 100%;
  overflow-y: scroll;
}
.item-similar-film {
  width: auto;
  height: 100%;
  cursor: pointer;
}
.item-similar-film h3 {
  font-weight: 200;
  font-size: 14px;
}
.poster {
  position: relative;
  z-index: 1;
  overflow: hidden;
}
.infor-film {
  background: rgb(161, 161, 161);
  position: absolute;
  right: 0;
  left: 0;
  bottom: -48px;
  padding: 10px 14px;
  border-radius: 10px 10px 4px 4px;
  transition: all 0.3s ease-in-out;
  z-index: 0;
  opacity: 0;
}
.poster img {
  border-radius: 4px;
  height: auto;
}
.poster:hover .infor-film {
  bottom: 0px;
  opacity: 1;
}
::-webkit-scrollbar {
  width: 0;
  height: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #2c3338;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(85, 84, 84);
  border-radius: 10px;
  height: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(124, 90, 90);
}
</style>