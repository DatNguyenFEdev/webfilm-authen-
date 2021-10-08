<template>
  <div id="footer">
    <v-container>
      <a href="#">Bạn có câu hỏi? Liên hệ với chúng tôi</a>
      <div class="infor-company">
        <ul>
          <li><a href="#">Câu hỏi thường gặp</a></li>
          <li><a href="#">Quan hệ với nhà đầu tư</a></li>
          <li><a href="#">Quyền riêng tư</a></li>
          <li><a href="#">Kiểm tra tốc độ</a></li>
        </ul>
        <ul>
          <li><a href="#">Câu hỏi thường gặp</a></li>
          <li><a href="#">Quan hệ với nhà đầu tư</a></li>
          <li><a href="#">Quyền riêng tư</a></li>
          <li><a href="#">Kiểm tra tốc độ</a></li>
        </ul>
        <ul>
          <li><a href="#">Câu hỏi thường gặp</a></li>
          <li><a href="#">Quan hệ với nhà đầu tư</a></li>
          <li><a href="#">Quyền riêng tư</a></li>
          <li><a href="#">Kiểm tra tốc độ</a></li>
        </ul>
        <ul>
          <li><a href="#">Câu hỏi thường gặp</a></li>
          <li><a href="#">Quan hệ với nhà đầu tư</a></li>
          <li><a href="#">Quyền riêng tư</a></li>
          <li><a href="#">Kiểm tra tốc độ</a></li>
        </ul>
      </div>
      <div class="language">
        <select name="" id=""></select>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
    data(){
        return {
    }
    }

}
</script>

<style scoped>
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: #757575;
  }
  a:hover {
    text-decoration: underline;
  }
  #footer {
    background: #181818;
    border-top: 6px solid rgb(75, 71, 71);
    padding: 10px 0 20px 0;
  }
  .infor-company {
    display: flex;
    justify-content: space-between;
  }
  .infor-company {
    margin-top: 20px;
  }
  .infor-company >ul li {
    padding: 10px 0;
  }
  /* .infor-company >ul li a {
    color: #757575;
  } */
</style>