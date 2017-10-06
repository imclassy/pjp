<template>
  <div class="container-fluid">
    <div class="bg-image"></div>
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
export default {
  name: 'hello',
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
body{
  background:url("../assets/big-data.jpg");
}

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
.bg-image{
  background-image:url("../assets/big-data.jpg");
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
}
.hello{
  margin-top: 60px;
  text-align: center;
  color: #FFFFFF;
  background-color: rgba(0,0,0, 0.6);
}
</style>
