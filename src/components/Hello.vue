<template>
  <div class="container">
    <div class="vertical-center">
      <div class="content hello col-md-6 col-md-offset-3">
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
import { mapGetters } from 'vuex'

export default {
  name: 'hello',
  components: { Background, SocialIcons, NavLinks },
  computed: {
    ...mapGetters({
      english: 'english'
    }),
    intro1: function () {
      if (this.english === true) {
        return 'Hello! My name is Pedro Jaraba, I am a Computer Engineer with experience in software development, applications support, database design and project implementation.'
      } else {
        return 'Hola! Mi nombre es Pedro Jaraba, soy un ingeniero de sistemas con experiencia en desarrollo de software, soporte de aplicaciones, diseño de bases de datos e implementacion de proyectos.'
      }
    },
    intro2: function () {
      if (this.english === true) {
        return 'I possess a varied skillset including backend development in Java, Kotlin and Oracle Forms, data analysis and visualization.'
      } else {
        return 'Poseo un conjunto variado de habilidades incluyendo desarrollo backend en Java, Kotlin y Oracle Forms, análisis y visualizacion de datos.'
      }
    }
  },
  data () {
    return {
      title: 'PEDRO JARABA'
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
  /*text-align: left;*/
}

@media(max-width: 550px){
  img{
    max-width: 150px;
  }
}

</style>
