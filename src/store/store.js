import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import {BASE_URL, API_KEY} from "@/constants/index.js"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    films: [],
    isLogged: false,
  },

  mutations: {
    setFilms(state, payload) {
      state.films = payload;
    },
    setIsLogged(state, payload) {
      state.isLogged = payload;
    },
  },

  getters: {
    getListFilm(state) {
      return state.films.map((film) => {
        return {
          id: film.id,
          title: film.title,
          original_language: film.original_language,
          pathUrl: film.poster_path,
          releaseDate: film.release_date,
          backdrop_path: film.backdrop_path,
          vote_average: film.vote_average,
          overview: film.overview
        };
      });
    },
    
    getIsLogged(state) {
      return state.isLogged;
    },
  },

  actions: {
    async callApiGetFilms(context, query) {
      const url = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY

      const res = await axios.get(url, { params: { ...query } });
      const films = res.data.results;
      context.commit("setFilms", films);
    },

    async setIsLogged({ commit }, payload) {
      commit("setIsLogged", payload);
    },

    async login(context, user) {
      const res = await axios.get("http://localhost:3000/accountRegister");
      const checkLogged = res.data.find((inforUser) => {
        return inforUser.email === user.email && inforUser.password === user.password;
      });
      context.commit("setIsLogged", checkLogged !== undefined);
    },

    async register(_, user) {
      await axios.post("http://localhost:3000/accountRegister", user);
    },
  },
});
