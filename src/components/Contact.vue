<template>
  <div class="container">
      <div class="vertical-center">
          <div class="content col-md-6 col-md-offset-3">
            <h1>{{title}}</h1>
            <br>
            <p>{{msg}}</p>
            <br>
            <div class="contact-data"><span><img src="../assets/whatsapp2.png" alt="">+57 301 595 5937</span></div>
            <div class="contact-data"><span><img src="../assets/email.png" alt="">pe.jaraba@hotmail.com</span></div>
            <div class="contact-data"><span><img src="../assets/twitter.png" alt=""><a href="https://twitter.com/pedro_jaraba">@pedro_jaraba</a></span></div>
            <div class="contact-data"><span><img src="../assets/linkedin_square.png" alt=""><a href="https://www.linkedin.com/in/pedro-jaraba/">pedro-jaraba</a></span></div>
            <div class="contact-data"><span><img src="../assets/instagram.png" alt=""><a href="https://www.instagram.com/jarabapedro/?hl=es">jarabapedro</a></span></div>
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
  name: 'Contact',
  components: {NavLinks},
  computed: {
    ...mapGetters({
      english: 'english'
    }),
    title: function () {
      return this.english ? 'CONTACT' : 'CONTACTO'
    },
    msg: function () {
      return this.english ? 'Get in touch with me by any of the following channels and platforms: ' : 'Comunícate conmigo por medio de cualquier de los siguientes canales:'
    }
  }
}

</script>

<style scoped>
a{
  color: #7FDBFF;
}
img{
  height: auto;
  width: auto;
  max-width: 30px;
  max-height: 30px;
  margin-right: 10px;
}
.contact-data{
  margin-bottom: 10px;
}
</style>

