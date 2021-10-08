<template>
  <div id="newFilm" class="container" v-if="getIsLogged === true">
    <h1>Phim Mới</h1>
    <div class="listMovie">
      <div class="itemMovie" v-for="movie in filterNameFilm" :key="movie.id">
        <div class="thumb">
          <a :href="movie.backdrop_path" @click.prevent="goToDetailFilm(movie.id)">
            <img :src="`http://image.tmdb.org/t/p/w500${movie.pathUrl}`" />
          </a>
        </div>
        <div class="info-film">
          <a :href="movie.backdrop_path" @click.prevent="goToDetailFilm(movie.id)">{{movie.title}}</a>
          <span>{{movie.releaseDate}}</span>
        </div>
      </div>
    </div>
    <sliding-pagination
      :current="currentPage"
      :total="totalPages"
      @page-change="pageChangeHandler($event)"
      class="pagination"
    ></sliding-pagination>
  </div>
</template>

<script>
import SlidingPagination from "vue-sliding-pagination";
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      nameFilm: "",
      user: {},
      currentPage: 1,
      totalPages: 1000
    };
  },

  components: { SlidingPagination },

  methods: {
    ...mapActions(["callApiGetFilms"]),

    pageChangeHandler(selectedPage) {
      this.currentPage = selectedPage;
      this.callApiGetFilms({ page: this.currentPage });
    },

    goToDetailFilm(index) {
      this.$router.push(`/detail-film/${index}`);
    }
  },
  // get email, password từ localStorage xem có trùng vs tài khoản đang login hay kh?
  // Nếu đúng thì lưu vào localStorage và giữ trạng thái logged và refresh kh mất
  created() {
    this.callApiGetFilms({ page: this.currentPage });
    //nhận value input từ Header và hứng vào biến nameFilm
    this.$root.$on("filterTitleFilm", value => {
      this.nameFilm = value;
    });
  },
  //Tim trong API phim xem co ton tai value mà người dùng nhập từ input search hay kh?
  //Chức năng lọc qua tên phim,hứng sự kiện từ input(Header) để lấy value-input filter vs tên phim từ API
  computed: {
    ...mapGetters(["getListFilm", "getIsLogged"]),

    filterNameFilm() {
      return this.getListFilm.filter(film => {
        // console.log(this.nameFilm)
        // console.log(film.title.toLowerCase().includes(this.nameFilm.toLowerCase()))
        return film.title
          .toLowerCase()
          .replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, "")
          .replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a")
          .replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e")
          .replace(/ì|í|ị|ỉ|ĩ/g, "i")
          .replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o")
          .replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u")
          .replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y")
          .replace(/đ/g, "d")
          .replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A")
          .replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E")
          .replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I")
          .replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O")
          .replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U")
          .replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y")
          .replace(/Đ/g, "D")
          .includes(
            this.nameFilm
              .toLowerCase()
              .replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, "")
              .replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a")
              .replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e")
              .replace(/ì|í|ị|ỉ|ĩ/g, "i")
              .replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o")
              .replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u")
              .replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y")
              .replace(/đ/g, "d")
              .replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A")
              .replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E")
              .replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I")
              .replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O")
              .replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U")
              .replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y")
              .replace(/Đ/g, "D")
          );
      });
    }
  }
};
</script>

<style scoped>
@import "~vue-sliding-pagination/dist/style/vue-sliding-pagination.css";
#newFilm {
  padding: 100px 0 40px 0;
}
#newFilm h1 {
  font-weight: 600;
  margin-bottom: 20px;
  color: #fff;
}
.listMovie {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 20px 10px;
}
.itemMovie {
  height: 400px;
  background: rgb(48, 46, 46);
  border: 1px solid rgba(0, 0, 0, 0.041);
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0px 2px 2px #000000;
  transition: all 0.3s ease-in-out;
}
.itemMovie:hover {
  transform: scale(1.04);
}
.thumb {
  background: #999;
  width: 100%;
  height: 300px;
  max-height: 270px;
  overflow-y: hidden;
  background: #ccc;
}
.thumb img {
  max-width: 100%;
  display: block;
  object-fit: cover;
}
.info-film > a {
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  color: #fff;
  display: block;
  margin-top: 16px;
  padding: 0 8px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.info-film span {
  display: block;
  margin-top: 20px;
  font-style: italic;
  color: #ccc;
  padding: 0 8px;
}
li {
  list-style: none;
}
.pagination {
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
}
.c-sliding-pagination {
  text-align: center;
  margin: 1.5em 0;
}
</style>