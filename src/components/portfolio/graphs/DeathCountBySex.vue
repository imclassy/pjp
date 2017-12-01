<template>
  <div>
    <donut></donut>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Donut from '@/components/portfolio/graphs/Donut'
export default {
  name: 'DeathCountBySex',
  components: { Donut },
  computed: {
    ...mapGetters({
      english: 'english'
    })
  }
}
</script>

<style scoped>
  #graph{
    width: 100%;
    height: 100%;
  }
  .nvd3 text {
   font: normal 12px Roboto !important;
  }

</style>
