<template>
  <div id="app" >
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Maven+Pro|Roboto|Source+Sans+Pro');

body{
  font-family: 'Roboto', sans-serif;
}

h1{
  font-family: 'Maven Pro', sans-serif;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
