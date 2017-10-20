<template>
  <div id="app" >
    <router-view></router-view>
    <background></background>
  </div>
</template>

<script>
  import Background from './components/Background'

  export default {
    name: 'app',
    components: { Background }
  }
</script>

<style>



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

@font-face {
    font-family: 'Roboto';
    src: url('./assets/fonts/Roboto/Roboto-Regular.ttf') format('truetype');
}

@font-face {
  font-family: 'Maven Pro';
  src: url('./assets/fonts/Maven_Pro/MavenPro-Regular.ttf') format('truetype');
}
</style>
