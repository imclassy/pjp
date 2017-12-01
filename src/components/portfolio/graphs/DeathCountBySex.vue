<template>
  <div id='death-count-by-sex-chart'>
      <h4>Deaths by sex</h4>
      <donut :data="deathCountBySex" :width="chartDivWidth" :height="chartDivHeight"></donut>
      <p>Sample size: {{sampleSize}}</p>
      <p class="explanation">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc augue dolor, pretium non enim quis, cursus placerat eros. Suspendisse est magna, sagittis quis posuere vel, rutrum id erat. Proin aliquam consequat purus quis euismod. Suspendisse eget metus quam. Ut lobortis, dui quis consequat tempus, lectus odio tempor enim, at vehicula diam ipsum vel libero. Pellentesque magna diam, volutpat at auctor laoreet, pharetra condimentum elit. Curabitur interdum neque est, eget aliquam neque maximus nec. Nulla viverra odio nec sem hendrerit, nec vestibulum tortor volutpat. Proin maximus leo mauris, et semper quam pharetra eu. Sed vel arcu diam. Mauris ac gravida ipsum. Sed lacinia nec tortor eget volutpat.</p>
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
    }),
    sampleSize: function () {
      let count = this.deathCountBySex
      return count ? count.map(rec => rec.frequency).reduce((a, b) => a + b, 0) : 0
    },
    translatedDeathCount: function () {
      return this.adaptToLanguage(this.deathCountBySex)
    }
  },
  data () {
    return {
      deathCountBySex: null,
      chartDivHeight: 0,
      chartDivWidth: 0
    }
  },
  methods: {
    get_death_count: () => fetch('/static/json/death_count_grouped_by_sex.json')
                            .then(res => res.json()),
    updateChartDivSize: function (event) {
      this.chartDivHeight = document.getElementById('death-count-by-sex-chart').offsetHeight * 0.8
      this.chartDivWidth = document.getElementById('death-count-by-sex-chart').offsetWidth
    },
    adaptToLanguage: function (deathCount) {
      let isEnglish = this.english
      const translate = function (record) {
        return { frequency: record.frequency, value: { code: record.value.code, name: isEnglish ? record.value.name : record.value.spanish_name } }
      }
      return deathCount.map(translate)
    }
  },
  mounted () {
    this.$nextTick(function () {
      window.addEventListener('resize', this.updateChartDivSize)
      this.updateChartDivSize()
    })
    this.get_death_count()
      .then(deathCount => { this.deathCountBySex = deathCount })
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.updateChartDivSize)
  }
}
</script>
<style scoped>
  #death-count-by-sex-chart{
    height: 100%;
  }
  .explanation{
    text-align: left;
  }
</style>

