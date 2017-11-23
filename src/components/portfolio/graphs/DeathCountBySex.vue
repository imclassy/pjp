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
      var colors = {}
      colors['MALE'] = '#247BA0'
      colors['FEMALE'] = '#FF1654'
      colors['UNKNOWN'] = '#F3FFBD'

      var coloredData = []
      for (var i = 0; i < data.length; i++) {
        var coloredRecord = data[i]
        coloredRecord.color = colors[coloredRecord.value.name]
        coloredData.push(coloredRecord)
      }
      nv.addGraph(function () {
        var chart = nv.models.pieChart()
            .x(function (d) { return d.value.name })
            .y(function (d) { return d.frequency })
            .showLabels(true)     // Display pie labels
            // .labelThreshold(0.05)  // Configure the minimum slice size for labels to show up
            .labelType('percent') // Configure what type of data to show in the label. Can be "key", "value" or "percent"
            .donut(true)          // Turn on Donut mode. Makes pie chart look tasty!
            .donutRatio(0.35)     // Configure how big you want the donut hole size to be.
            .width(500)
            .height(350)
            .color(function (d) { return d.color })
            .id('piechart')

        d3.select('#graph')
            .append('svg')
            .datum(coloredData)
            .transition().duration(350)
            .call(chart)

        d3.selectAll('.nv-pieLabels text').style('fill', 'white').style('font', 'Roboto')
        d3.selectAll('.nv-legend-text').style('fill', 'white').style('font', 'Roboto')
        d3.selectAll('.nvd3 text').style('fill', 'white').style('font', 'Roboto')
        d3.selectAll('.nvd3.nv-pie path').style('stroke-opacity', '0')
        return chart
      })
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
