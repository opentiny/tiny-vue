<template>
  <div class="hui-chart chart-box">
    <div ref="chartRef" :style="{ width, height }"></div>
    <slot></slot>
  </div>
</template>

<script>
import Core from '@opentiny/vue-chart-core'
import { getIChartOption } from './gauge'
import { $prefix } from '@opentiny/vue-common'

export default {
  name: $prefix + 'ChartGauge',
  mixins: [Core],

  data() {
    return {
      iChartName: 'GaugeChart'
    }
  },
  methods: {
    updateChart() {
      let { columns = [], rows = [] } = this.data

      const extra = {
        legendVisible: this.legendVisible,
        tooltipVisible: this.tooltipVisible
      }
      this.option = getIChartOption(columns, rows, this.settings, extra)
    }
  }
}
</script>
