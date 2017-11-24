<template>
  <donut :data="deathCountBySex"></donut>
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
  },
  data () {
    return {
      deathCountBySex: null
    }
  },
  methods: {
    get_death_count: () => fetch('/static/json/death_count_grouped_by_sex.json')
                            .then(res => res.json())
  },
  mounted () {
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
  }
}

</script>
