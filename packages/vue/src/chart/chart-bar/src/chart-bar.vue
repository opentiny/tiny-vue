<template>
  <div class="hui-chart chart-box">
    <div ref="chartRef" :style="{width, height}"></div>
    <slot></slot>
  </div>
</template>

<script>
import { histogram } from './histogram'
import Core from '@opentiny/vue-chart-core'
import { $prefix } from '@opentiny/vue-common'

export default {
  name: $prefix + 'ChartBar',
  mixins: [Core],
  data() {
    return {
      iChartName: 'BarChart',
      option: {}
    }
  },
  methods: {
    updateChart() {
      let { columns = [], rows = [] } = this.data

      const extra = {
        tooltipVisible: this.tooltipVisible,
        legendVisible: this.legendVisible,
        extend: this.extend
      }

      const option = histogram(columns, rows, this.settings, extra, false)

      this.option = {
        smooth: true,
        ...option,
        direction: 'horizontal'
      }
    }
  }
}
</script>
