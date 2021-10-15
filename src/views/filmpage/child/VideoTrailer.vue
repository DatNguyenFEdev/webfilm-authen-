<template>
  <div class="video" v-if="openVideo">
    <div><i class="fas fa-times" @click="closeVideo"></i></div>
    <iframe width="863" height="485" allow="fullscreen" autoplay encrypted-media frameborder="0"
    :src="`https://www.youtube.com/embed/${video.key}`">
    </iframe>
  </div>
</template>

<script>
import axios from "axios"
import {API_KEY} from "@/constants/index.js"
import {BASE_URL} from "@/constants/index.js"

export default {
    props:['filmId', 'openVideo'],
    data() {
        return {
            video: {}
        }
    },
    async created() {
        // const filmId =  this.$router.params.film_id
        // console.log(this.filmId);
        const url = BASE_URL + "/movie/" + this.filmId + "/videos?" + API_KEY + "&language=en-US"
        // console.log(this.filmId);
        const res = await axios.get(url);
        const video = res.data.results[0]
        // console.log(video)
        this.video = video
    },
    methods: {
      closeVideo() {
        this.$emit('closeVideo', this.openVideo=false)
      }
    }
};
</script>

<style scoped>
.video {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.video div {
  width: 100%;
  height: 40px;background: black;
  position: relative;
}
.video div i {
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  padding:6px 9px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
}
.video div i:hover {
  background: rgba(255, 255, 255,0.1);
  color: #ccc;
}
</style>