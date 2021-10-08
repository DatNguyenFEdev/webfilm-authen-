<template>
  <div class="load-container">
      <div class="loader"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.load-container {
    background: black;
    position: absolute; top: 0; left: 0; width: 100%; height: 100%; 
    display:flex;
    align-items:center;
    justify-content: center;
}
.loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
  transform: translate(-50%,-50%);
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

</style>