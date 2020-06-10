<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
* {
  box-sizing: border-box;
  :focus {
    outline: 0;
  }
}
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}
ul,
li {
  list-style: none;
  padding: 0;
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
a {
  text-decoration: none;
}
</style>
