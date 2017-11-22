<template>
  <div id='graph'>
  </div>
</template>

<script>
import * as d3 from 'd3'
import * as nv from 'nvd3'
import { mapGetters } from 'vuex'
export default {
  name: 'DeathCountBySex',
  computed: {
    ...mapGetters({
      english: 'english'
    })
  },
  mounted () {
    d3.json('/static/json/death_count_grouped_by_sex.json', function (data) {
      console.log(data)
      nv.addGraph(function () {
        var chart = nv.models.pieChart()
            .x(function (d) { return d.value.name })
            .y(function (d) { return d.frequency })
            .showLabels(true)     // Display pie labels
            .labelThreshold(0.05)  // Configure the minimum slice size for labels to show up
            .labelType('percent') // Configure what type of data to show in the label. Can be "key", "value" or "percent"
            .donut(true)          // Turn on Donut mode. Makes pie chart look tasty!
            .donutRatio(0.35)     // Configure how big you want the donut hole size to be.

        d3.select('#graph')
            .append('svg')
            .datum(data)
            .transition().duration(350)
            .call(chart)

        d3.selectAll('.nv-pieLabels text').style('fill', 'white').style('font', 'Roboto')
        d3.selectAll('.nv-legend-text').style('fill', 'white').style('font', 'Roboto')
        d3.selectAll('.nvd3 text').style('fill', 'white').style('font', 'Roboto')
        return chart
      })
    })
  }
}

</script>

<style scoped>
  #graph{
    width: 500px;
    height: 500px;
  }
  .nvd3 text {
   font: normal 12px Roboto !important;
  }
</style>
