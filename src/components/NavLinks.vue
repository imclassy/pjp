<template>
  <ul>
          <li><a href="http://router.vuejs.org/" target="_blank">ABOUT</a></li>
          <li><a href="http://vuex.vuejs.org/" target="_blank">SKILLS</a></li>
          <li><a href="http://vue-loader.vuejs.org/" target="_blank">PORTFOLIO</a></li>
          <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">CONTACT</a></li>
        </ul>
</template>

<script>
export default {
  name: 'nav-links'
}
</script>

<style scoped>
li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #F5F5F5;
}

ul {
  list-style-type: none;
  padding: 0;
}

</style>

