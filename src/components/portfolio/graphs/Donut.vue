<template>
  <div id='graph'>
    <svg id='graph-svg'></svg> 
  </div>
</template>

<script>
import * as d3 from 'd3'
import * as nv from 'nvd3'
export default {
  name: 'Donut',
  props: ['data', 'width', 'height'],
  methods: {
    drawChart: function () {
      this.chart = nv.models.pieChart()
            .x(function (d) { return d.value.name })
            .y(function (d) { return d.frequency })
            .showLabels(true)     // Display pie labels
            .labelThreshold(0.05)  // Configure the minimum slice size for labels to show up
            .labelType('percent') // Configure what type of data to show in the label. Can be "key", "value" or "percent"
            .donut(true)          // Turn on Donut mode. Makes pie chart look tasty!
            .donutRatio(0.35)     // Configure how big you want the donut hole size to be.
            .width(this.width)
            .height(this.height)
            .color(function (d) { return d.color })
            .id('piechart')
    }
  },
  data () {
    return {
      chart: null,
      chartJoin: null
    }
  },
  watch: {
    data: function (newData) {
      this.chartJoin = d3.select('#graph svg')
                           .datum(newData)
                           .transition()
                           .duration(350)
                           .call(this.chart)
      nv.utils.windowResize(this.chart.update)
      d3.selectAll('.nv-pieLabels text').style('fill', 'white').style('font', 'Roboto')
      d3.selectAll('.nv-legend-text').style('fill', 'white').style('font', 'Roboto')
      d3.selectAll('.nvd3 text').style('fill', 'white').style('font', 'Roboto')
      d3.selectAll('.nvd3.nv-pie path').style('stroke-opacity', '0')
    },
    width: function (newWidth) {
      let svg = d3.select('#graph-svg')
      svg.attr('width', newWidth)
    },
    height: function (newHeight) {
      let svg = d3.select('#graph-svg')
      svg.attr('height', newHeight)
    }
  },
  mounted () {
    this.drawChart()
  }
}

</script>

<style scoped>
  .nvd3 text {
   font: normal 12px Roboto !important;
  }

</style>
