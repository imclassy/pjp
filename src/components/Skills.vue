<template>
  <div class="container-fluid">
    <div class="vertical-center">
        <div class="content col-md-6 col-md-offset-3">
            <h1>{{title}}</h1>
            <br>
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
  name: 'Skills',
  components: {NavLinks},
  computed: {
    ...mapGetters({
      english: 'english'
    }),
    title: function () {
      return this.english ? 'SKILLS' : 'CONOCIMIENTOS'
    }
  }
}
</script>

