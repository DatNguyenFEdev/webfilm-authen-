<template>
  <div id="banner">
      <div class="bg-gradient"></div>
      <div class="title">
          <h1>Chương trình truyền hình, phim không giới hạn và nhiều nội dung khác</h1>
          <h2>Xem ở mọi nơi. Hủy bất kỳ lúc nào.</h2>
          <h3>Bạn đã sẵn sàng xem chưa? Nhập email để tạo hoặc kích hoạt lại tư cách thành viên của bạn.</h3>
          <form action="" @submit.prevent="">
              <input type="email" placeholder="Địa chỉ email">
              <input type="submit" value="Bắt đầu">
          </form>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style scoped>
#banner {
    z-index: 2;
    background: red;
    background: url(https://assets.nflxext.com/ffe/siteui/vlv3/5a27cb25-33a9-4bcc-b441-95fefabcbd37/6bdbf132-dd7b-4d42-8f84-9139f9c4eaac/VN-vi-20210823-popsignuptwoweeks-perspective_alpha_website_small.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    height: 817px;
    width: 100%;
    text-align:center;
    position: relative;
    /* overflow: hidden; */
}
.bg-gradient {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom:0;
    background:linear-gradient(to top, rgba(0, 0, 0, 0.8) 0px, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%) rgba(0, 0, 0, 0.4);
}
.title {
    position:absolute;
    top: 24%;
    left: 50%;
    transform:translateY(-50%);
    transform:translateX(-50%);
    color: #fff;
    max-width:600px;
}
.title form {
    position: relative;
    width: auto;
    display: inline-block;
    margin-left: -108px;
}
.title form input {
    outline: none;
    border: none;    
}
.title form input[type="email"] {
    background: #fff;
    padding:12px;
    width: 400px;
    font-size: 16px;
}
.title form input[type="submit"] {
    background: red;
    padding:12px 40px;
    position: absolute;
    left: 100%;
    top: 0;
}
.title h1 {
    font-size:46px;
    font-weight: 700;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}
.title h2 {
    margin-top: 20px;
    font-weight: 300;
    font-size: 20px;
}
.title h3 {
    margin-top: 30px;
    margin-bottom: 30px;
    font-size: 7px;
    font-weight:200;
}
</style>