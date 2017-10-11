<template>
  <div id="app" >
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppFooter from './components/AppFooter.vue'
export default {
  name: 'app',
  components: { AppFooter }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Maven+Pro|Roboto|Source+Sans+Pro');

body{
  font-family: 'Roboto', sans-serif;
  padding-bottom: 15px;
}

h1{
  font-family: 'Maven Pro', sans-serif;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
