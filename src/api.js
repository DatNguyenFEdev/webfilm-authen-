{/* <template>
  <v-app>
    <v-container>
      <ol>
        <li v-for="item in list" :key="item.id">
          {{item.author}}
          <v-btn @click="removeCard(item.id)">Xoá</v-btn>
        </li>
      </ol>
      <v-text-field label="Another input" v-model="value" @keyup.enter="add()"></v-text-field>
      <!-- <v-input v-model="value"> -->
      <v-btn @click="add()" >them</v-btn>
    </v-container>
  </v-app>
</template>

<script>
import axios from "axios"
export default {
  name: 'App',
  data() {
    return {
      list:[],
      value:''
    }
  },
  created() {
     axios.get("http://localhost:3000/posts")
    .then((res) => {
      this.list = res.data;
      console.log(res);
    })
  },
  components: {
  },
  methods: {
    async add() {
      await axios.post('http://localhost:3000/posts', {
    title: "ffff",
    author: this.value
  })
  this.value = ""
  axios.get("http://localhost:3000/posts")
    .then((res) => {
      this.list = res.data;
      console.log(res);
    })
  },
  async removeCard(id) {
    console.log(id);
    await axios.delete(`http://localhost:3000/posts/${id}`)
    

    axios.get("http://localhost:3000/posts")
    .then((res) => {
      this.list = res.data;
      console.log(res);
    })
}
  }
  
};

</script> */}
