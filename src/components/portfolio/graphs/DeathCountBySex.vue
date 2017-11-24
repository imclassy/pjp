<template>
  <div id='death-count-by-sex-chart'>
      <donut :data="deathCountBySex" :width="chartDivWidth" :height="chartDivHeight"></donut>
      <p>Sample size: {{sampleSize}}</p>
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
      this.chartDivHeight = document.getElementById('death-count-by-sex-chart').offsetHeight
      this.chartDivWidth = document.getElementById('death-count-by-sex-chart').offsetWidth
    }
  },
  mounted () {
    this.$nextTick(function () {
      window.addEventListener('resize', this.updateChartDivSize)
      this.updateChartDivSize()
    })
    this.get_death_count()
        .then(data => {
          let colors = {}
          colors['MALE'] = '#247BA0'
          colors['FEMALE'] = '#FF1654'
          colors['UNKNOWN'] = '#F3FFBD'

          let coloredData = []
          for (var i = 0; i < data.length; i++) {
            let coloredRecord = data[i]
            coloredRecord.color = colors[coloredRecord.value.name]
            coloredData.push(coloredRecord)
          }

          return coloredData
        })
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
</style>

