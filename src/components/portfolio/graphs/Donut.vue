<template>
  <div id='graph'>
    <svg>
    </svg>
  </div>
</template>

<script>
import * as d3 from 'd3'
import * as nv from 'nvd3'
export default {
  name: 'Donut',
  props: ['colors'],
  mounted () {
    var col = this.colors
    const _colors = function () {
      const defaultColors = ['#247BA0', '#FF1654', '#F3FFBD']
      if (col) {
        return col
      }
      return defaultColors
    }
    d3.json('/static/json/death_count_grouped_by_sex.json', function (data) {
      nv.addGraph(function () {
        var chart = nv.models.pieChart()
            .x(function (d) { return d.value.name })
            .y(function (d) { return d.frequency })
            .showLabels(true)     // Display pie labels
            .labelThreshold(0.05)  // Configure the minimum slice size for labels to show up
            .labelType('percent') // Configure what type of data to show in the label. Can be "key", "value" or "percent"
            .donut(true)          // Turn on Donut mode. Makes pie chart look tasty!
            .donutRatio(0.35)     // Configure how big you want the donut hole size to be.
            .width(500)
            .height(350)
            .color(_colors())
            .id('piechart')

        d3.select('#graph svg')
            .datum(data)
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
  .nvd3-svg{
    height: 350 !important;
  }
  #graph{
    width: 100%;
    height: 100%;
  }
  .nvd3 text {
   font: normal 12px Roboto !important;
  }

</style>
