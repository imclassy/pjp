<template>
    <ul>
        <li><a role="button" @click="toggleEnglish(true)" v-bind:class="{ underlighted: english }">English</a></li>
        <li><a role="button" @click="toggleEnglish(false)" v-bind:class="{ underlighted: !english }">Español</a></li>
    </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'language-options',
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
.underlighted{
  text-decoration: underline;
}
li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #DDDDDD;
}

ul {
  list-style-type: none;
  padding: 0;
}

</style>


