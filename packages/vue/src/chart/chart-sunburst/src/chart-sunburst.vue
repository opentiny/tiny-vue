<template>
  <div class="hui-chart chart-box">
    <div ref="chartRef" :style="{ width, height }"></div>
    <slot></slot>
  </div>
</template>

<script>
import { sunburst } from './sunburst'
import Core from '../../chart-core'
import { $prefix } from '@opentiny/vue-common'

export default {
  name: $prefix + 'ChartSunburst',
  mixins: [Core],
  data() {
    return {
      iChartName: 'SunburstChart',
      option: {}
    }
  },
  methods: {
    updateChart(data) {
      const { columns = [], rows = [] } = data
      const extra = {
        tooltipVisible: this.tooltipVisible,
        extend: this.extend
      }
      const option = sunburst(columns, rows, this.settings, extra)

      this.option = {
        ...option
      }
    }
  }
}
</script>
