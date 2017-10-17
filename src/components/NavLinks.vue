<template>
  <ul>
    <li><router-link to="/">{{home}}</router-link></li>
    <li><router-link to="/about">{{about}}</router-link></li>
    <li><router-link to="/skills">{{skills}}</router-link></li>
    <li><router-link to="/portfolio">{{portfolio}}</router-link></li>
    <li><router-link to="/contact">{{contact}}</router-link></li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'nav-links',
  computed: {
    ...mapGetters({
      english: 'english'
    }),
    about: function () {
      return this.english ? 'ABOUT' : 'ACERCA DE'
    },
    skills: function () {
      return this.english ? 'SKILLS' : 'CONOCIMIENTOS'
    },
    portfolio: function () {
      return this.english ? 'PORTFOLIO' : 'PORTAFOLIO'
    },
    contact: function () {
      return this.english ? 'CONTACT' : 'CONTACTO'
    },
    home: function () {
      return this.english ? 'HOME' : 'INICIO'
    }
  }
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

