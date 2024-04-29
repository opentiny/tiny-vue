<template>
  <div class="hui-chart chart-box">
    <div ref="chartRef" :style="{ width, height }"></div>
    <slot></slot>
  </div>
</template>

<script>
import Core from '@opentiny/vue-chart-core'
import { histogram } from './histogram'

export default {
  name: 'ChartHistogram',
  mixins: [Core],
  data() {
    return {
      iChartName: 'BarChart',
      option: {}
    }
  },
  methods: {
    updateChart(data) {
      let { columns = [], rows = [] } = data

      const extra = {
        tooltipVisible: this.tooltipVisible,
        legendVisible: this.legendVisible,
        extend: this.extend
      }

      const option = histogram(columns, rows, this.settings, extra, true)

      this.option = {
        smooth: true,
        ...option
      }
    }
  }
}
</script>
