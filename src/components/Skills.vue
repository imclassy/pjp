<template>
  <div class="container-fluid">
    <div class="vertical-center">
        <div class="content col-md-6 col-md-offset-3">
            <h1>{{title}}</h1>
            <br>
            <div id="figure-container">
              <figure>
                <img  id="java-img" src="../assets/java.png">
                <figcaption>JAVA</figcaption>
              </figure>

              <figure>
                <img  id="oracle-img" src="../assets/oracle.png">
                <figcaption>SQL, PL/SQL & FORMS</figcaption>
              </figure>

              <figure>
                <img  id="kotlin-img" src="../assets/kotlin.png">
                <figcaption>KOTLIN</figcaption>
              </figure>

              <figure>
                <img  id="js-img" src="../assets/js.png">
                <figcaption>JAVASCRIPT</figcaption>
              </figure>
            </div>

            <div id="figure-container">
              <figure>
                <img  id="spring-img" src="../assets/spring.png">
                <figcaption>SPRING</figcaption>
              </figure>

              <figure>
                <img  id="vue-img" src="../assets/vue.png">
                <figcaption>VUE</figcaption>
              </figure>

              <figure>
                <img  id="db-img" src="../assets/db.png">
                <figcaption>{{design}}</figcaption>
              </figure>

              <figure>
                <img  id="data-img" src="../assets/data_analysis.png">
                <figcaption>{{analysis}}</figcaption>
              </figure>
            </div>
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
    },
    design: function () {
      return this.english ? 'DATABASE DESIGN' : 'DISENO DE BASES DE DATOS'
    },
    analysis: function () {
      return this.english ? 'DATA ANALYSIS' : 'ANALISIS DE DATOS'
    }
  }
}
</script>

<style scoped>
img{
  height: auto;
  width: auto;
  max-width: 100px;
  max-height: 100px;
}
figure{
  display: inline-block;
  padding-right: 10px;
}
#figure-container{
  display: inline-block;
  margin-bottom: 30px;
}
</style>
