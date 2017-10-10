<template>
    <footer>
      <ul>
        <li><a href="#" v-on:click="toggle_english">English</a></li>
        <li><a href="#" v-on:click="toggle_spanish">Espanol</a></li>
      </ul>
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
  methods:{
    toggle_english: function(){
      this.english = true;
    },

    toggle_spanish: function(){
      this.english = false;
    }
  }
}

</script>






