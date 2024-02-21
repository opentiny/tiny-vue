<template>
  <div class="hui-chart chart-box" ref="chartRef" :style="{ width, height }"></div>
</template>

<script>
import Core from '@opentiny/vue-chart-core-beta'
import { line } from './line'

export default {
  name: 'ChartLine',
  mixins: [Core],
  data() {
    return {
      iChartName: 'LineChart'
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
      const option = line(columns, rows, this.settings, extra)

      this.option = {
        smooth: true,
        ...option
      }
    }
  }
}
</script>
