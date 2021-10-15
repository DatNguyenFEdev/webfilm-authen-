<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
}
body {
  font-family: "Poppins", sans-serif;
}
/* width */
::-webkit-scrollbar {
  width: 14px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #2c3338;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(85, 84, 84);
  border-radius: 10px;
  height: 20px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(124, 90, 90);
}
</style>
