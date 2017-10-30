<template>
  <div class="container">
      <div class="vertical-center">
        <div class="content col-md-6 col-md-offset-3">
            <header>
            <h1 class="text-center">Disfunciones en Colombia 2015</h1>
            </header>
            <section>

            </section>
        </div>
      </div>
  </div>
</template>

<script>
import * as d3 from 'd3'
export default {
  name: 'deaths',
  mounted () {
    d3.select('section')
    .selectAll('p')
    .data(['hola', 'esto', 'es', 'un', 'ejemplo'])
    .enter()
    .append('p')
    .text(d => d)
  }
}

</script>




