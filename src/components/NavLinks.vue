<template>
<div>
  <ul>
    <li><router-link to="/" :class="{highlight : $route.name==='Hello'}">{{home}}</router-link></li>
    <li><router-link to="/about" :class="{highlight : $route.name==='About'}">{{about}}</router-link></li>
    <li><router-link to="/skills" :class="{highlight : $route.name==='Skills'}">{{skills}}</router-link></li>
    <li><router-link to="/portfolio" :class="{highlight : $route.name==='Portfolio'}">{{portfolio}}</router-link></li>
    <li><router-link to="/contact" :class="{highlight : $route.name==='Contact'}">{{contact}}</router-link></li>
  </ul>
  <language-options></language-options>
  
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import LanguageOptions from './LanguageOptions'

export default {
  name: 'nav-links',
  components: { LanguageOptions },
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

@media(max-width: 550px){
  li{
    padding: 2px;
    margin: 0 0px;
  }
}

ul {
  list-style-type: none;
  padding: 0;
}

.highlight{
  text-decoration: underline;
}

</style>

