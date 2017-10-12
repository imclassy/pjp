<template>
  <div class="container-fluid">
    <background></background>
    <div class="content vertical-center">
      <div class="hello col-md-6 col-md-offset-3">
        <h1>{{ title }}</h1>
        </br>
        <p id="intro">
          {{intro1}}
          </br></br>
          {{intro2}}
        </p>
        </br>
        <img id="hello-img" src="../assets/profile_pic_1.png">
        </br>
        </br>
        <social-icons></social-icons>
        <hr>
        <nav-links></nav-links>
      </div>
    </div>
  </div>
</template>

<script>

import Background from './Background'
import SocialIcons from './SocialIcons'
import NavLinks from './NavLinks'

export default {
  name: 'hello',
  components: { Background, SocialIcons, NavLinks },
  data () {
    return {
      english: true,
      title: 'PEDRO JARABA',
      intro1: 'Hello! My name is Pedro Jaraba, I am a Computer Engineer with experience in software development, applications support, database design and project implementation.',
      intro2: 'I possess a varied skillset including backend development in Java and Oracle Forms, data analysis and visualization.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#hello-img{
  border: 2px solid #FFFFFF;
}

p{
  text-align: justify;
}

.hello{
  /*margin-top: 7%;*/
  /*padding-top: 10%;*/
  text-align: center;
  color: #F5F5F5;  
}

.vertical-center {
  min-height: 100%;  /* Fallback for browsers do NOT support vh unit */
  min-height: 100vh; /* These two lines are counted as one :-)       */

  display: flex;
  align-items: center;
}

</style>
