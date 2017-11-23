<template>
  <div class="container">
      <div class="vertical-center">
        <div class="content col-md-6 col-md-offset-3">
            <header>
            <h1 class="text-center">{{title}}</h1>
            {{intro}}
            </header>
            <section>
                <h3>Deaths by sex</h3>
                <death-count-by-sex></death-count-by-sex>
            </section>
        </div>
      </div>
  </div>
</template>

<script>
import DeathCountBySex from '@/components/portfolio/graphs/DeathCountBySex'
import { mapGetters } from 'vuex'
export default {
  name: 'WhoDied',
  components: { DeathCountBySex },
  computed: {
    ...mapGetters({
      english: 'english'
    }),
    title: function () {
      return this.english ? 'Who died?' : 'Quienes murieron?'
    },
    intro: function () {
      return this.english ? 'A nice intro ' : 'Una intro chevere'
    }
  }
}

</script>

<style scoped>
  section{
    height: 400px;
    width: 500px;
  }
</style>

