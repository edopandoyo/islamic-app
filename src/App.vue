<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

body {
  font-family: 'Montserrat', sans-serif;
  max-width: 800px;
  margin: 0 auto;
}
a {
  text-decoration: none;
}
@font-face {
    font-family: 'fontQuran';
    src: local("fontQuran"), url(/assets/font/Uthman.otf) format('opentype');
    unicode-range:0600–06FF;
}
</style>
