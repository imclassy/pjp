<template>
  <div class="container-fluid">
    <background></background>
    <div class="content">
      <div class="hello col-md-6 col-md-offset-3">
        <h1>{{ msg }}</h1>
        </br>
        <p id="intro">
          {{intro1}}
          </br></br>
          {{intro2}}
        </p>
        </br>
        <img src="../assets/profile_pic_1.png">
        <hr>
        <ul>
          <li><a href="http://router.vuejs.org/" target="_blank">About</a></li>
          <li><a href="http://vuex.vuejs.org/" target="_blank">Skills</a></li>
          <li><a href="http://vue-loader.vuejs.org/" target="_blank">Portfolio</a></li>
          <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">Contact</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

import Background from './Background.vue'

export default {
  name: 'hello',
  components: {Background},
  data () {
    return {
      msg: 'Pedro Jaraba',
      intro1: 'Hello! My name is Pedro Jaraba, I am a Computer Engineer with experience in software development, applications support, database design and project implementation.',
      intro2: 'I possess a varied skillset including backend development in Java and Oracle Forms, data analysis and visualization.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1{
  font-family: "brandon-grotesque", sans-serif !important;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #F5F5F5;
}

p{
  text-align: justify
}


.hello{
  margin-top: 60px;
  text-align: center;
  color: #FFFFFF;
}
</style>
