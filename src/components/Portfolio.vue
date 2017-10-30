<template>
  <div class="container">
      <div class="vertical-center">
          <div class="content col-md-6 col-md-offset-3">
              <h1>{{title}}</h1>
              <br>
              <router-link to="/deaths">Deaths</router-link>
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
  name: 'Portfolio',
  components: {NavLinks},
  computed: {
    ...mapGetters({
      english: 'english'
    }),
    title: function () {
      return this.english ? 'PORTFOLIO' : 'PORTAFOLIO'
    }
  }
}
</script>

