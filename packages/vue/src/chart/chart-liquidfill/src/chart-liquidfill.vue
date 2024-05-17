<template>
  <div class="hui-chart chart-box">
    <div ref="chartRef" :style="{ width, height }"></div>
    <slot></slot>
  </div>
</template>

<script>
import Core from '@opentiny/vue-chart-core'
import { getIChartOption } from './liquidfill'
import 'echarts-liquidfill'
import { $prefix } from '@opentiny/vue-common'

export default {
  name: $prefix + 'ChartLiquidfill',
  mixins: [Core],

  data() {
    return {
      iChartName: 'LiquidfillChart'
    }
  },
  methods: {
    updateChart() {
      const { columns = [], rows = [] } = this.data

      const extra = {
        legendVisible: this.legendVisible,
        tooltipVisible: this.tooltipVisible
      }
      this.option = getIChartOption(columns, rows, this.settings, extra)
    }
  }
}
</script>
