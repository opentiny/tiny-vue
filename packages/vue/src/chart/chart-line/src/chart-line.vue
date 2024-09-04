<template>
  <div class="hui-chart chart-box">
    <div ref="chartRef" :style="{ width, height }"></div>
    <slot></slot>
  </div>
</template>

<script>
import Core from '@opentiny/vue-chart-core'
import { line } from './line'
import { $prefix } from '@opentiny/vue-common'

export default {
  name: $prefix + 'ChartLine',
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
