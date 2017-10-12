<template>
  <div id="app" >
    <router-view></router-view>
    <app-footer></app-footer>
    <background></background>
  </div>
</template>

<script>
  import AppFooter from './components/AppFooter'
  import Background from './components/Background'

  export default {
    name: 'app',
    components: { AppFooter, Background }
  }
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Maven+Pro|Roboto|Source+Sans+Pro');

body{
  font-family: 'Roboto', sans-serif;
  height: 100%;
  color: #F5F5F5;
}

h1{
  font-family: 'Maven Pro', sans-serif;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.vertical-center {
  min-height: 100%;  /* Fallback for browsers do NOT support vh unit */
  min-height: 100vh; /* These two lines are counted as one :-)       */
  text-align: center;
  display: flex;
  align-items: center;
}

.content{
  z-index: 999;
}
</style>
