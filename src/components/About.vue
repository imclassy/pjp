<template>
  <div class="container-fluid">
    <div class="vertical-center">
        <div class="content col-md-6 col-md-offset-3">
            <h1>{{title}}</h1>
            <br>
            <p>{{text}}</p>
            <img  src="../assets/family.png">
            <img  src="../assets/special_date.png">
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
      const englishText = 'I am a 23 years old guy who likes to learn, commit to and master new things, including topics about software design, programming languages and strength sports. I live alone since age 16, so I developed a strong sense of hard work and responsibility, but I love my family.'
      const spanishText = 'Soy un joven de 23 anos que le gusta aprender, dedicarse y perfeccionar nuevas cosas, incluyendo temas acerca de diseno de software y deportes de fuerza. Vivo solo desde los 16 anos, por lo tanto, he desarrollado un sentido de trabajo fuerte y responsabilidad, sin embargo, amo mucho a mi familia.'
      return this.english ? englishText : spanishText
    }
  }
}
</script>

<style scoped>
img{
  border: 2px solid #FFFFFF;
}
</style>
