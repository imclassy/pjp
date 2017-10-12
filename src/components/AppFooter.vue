<template>
    <footer class="footer navbar-fixed-bottom">
      <div class="container text-center links">
        <ul>
          <li><a href="#" @click="toggleEnglish(true)" v-bind:class="{ underlighted: english }">English</a></li>
          <li><a href="#" @click="toggleEnglish(false)" v-bind:class="{ underlighted: !english }">Español</a></li>
        </ul>
      </div>
    </footer>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'app-footer',

  computed: {
    ...mapGetters({
      english: 'english'
    })
  },
  methods: {
    ...mapActions([
      'toggleEnglish'
    ])
  }
}

</script>

<style scoped>
footer{
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: #FFF;
  height: 35px;
}

 li {
    display: inline-block;
    margin: 0 1%;
}

a {
    color: #F5F5F5;
}

ul {
  list-style-type: none;
  padding: 0;
}

.underlighted{
  text-decoration: underline;
}

.links{
  margin-top: 1%;
}


</style>







