<template>
  <div class="container">
    <div class="vertical-center">
        <div class="content col-md-6 col-md-offset-3">
            <h1>{{title}}</h1>
            <br>
            <p>{{text}}</p>
            <figure>
              <img  src="../assets/santa-marta.jpg">
              <figcaption>{{hometownMessage}}</figcaption>
            </figure>
            <hr>
            <nav-links></nav-links>
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import NavLinks from './NavLinks'

export default {
  name: 'About',
  components: {NavLinks},
  computed: {
    ...mapGetters({
      english: 'english'
    }),
    title: function () {
      return this.english ? 'ABOUT' : 'ACERCA DE'
    },
    text: function () {
      const englishText = 'I am a 23 years old Colombian who likes to learn, commit to and master new things, including topics about software design, programming languages and different sports. I live alone since age 16, so I developed a strong sense of hard work, love for my family and responsibility.'
      const spanishText = 'Soy un joven colombiano de 23 años que le gusta aprender, dedicarse y perfeccionar nuevas cosas, incluyendo temas acerca de diseño de software y distintos deportes. Vivo solo desde los 16 años, por lo tanto, he desarrollado un sentido de trabajo fuerte, amor por mi familia y responsabilidad.'
      return this.english ? englishText : spanishText
    },
    hometownMessage: function () {
      const englishText = 'My gorgeous hometown, Santa Marta'
      const spanishText = 'Mi hermosa ciudad natal, Santa Marta'
      return this.english ? englishText : spanishText
    }
  }
}
</script>

<style scoped>
img{
  height: auto;
  width: auto;
  max-width: 450px;
  max-height: 450px;
  border: 2px solid #FFFFFF;
}

@media(max-width: 500px){
  img{
    margin-bottom: 10px;
    max-width: 250px;
    max-height: 250px;
  }
}
</style>
