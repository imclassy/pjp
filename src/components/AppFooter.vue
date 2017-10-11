<template>
    <footer class="footer navbar-fixed-bottom">
      <div class="container text-center links">
        <ul>
          <li><a href="#" v-on:click="toggle_english" v-bind:class="{ underlighted: english }">English</a></li>
          <li><a href="#" v-on:click="toggle_spanish" v-bind:class="{ underlighted: !english }">Español</a></li>
        </ul>
      </div>
    </footer>
</template>

<script>

export default {
  name: 'app-footer',
  data () {
    return {
      english: true
    }
  },
  methods: {
    toggle_english: function () {
      this.english = true
    },

    toggle_spanish: function () {
      this.english = false
    }
  }
}

</script>

<style scoped>
footer{
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: #FFF;
}

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

.underlighted{
  text-decoration: underline;
}

.links{
  margin-top: 10px;
}


</style>







