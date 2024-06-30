<template>
  <div class="hui-chart chart-box">
    <div ref="chartRef" :style="{ width, height }"></div>
    <slot></slot>
  </div>
</template>

<script>
import Core from '@opentiny/vue-chart-core'
import { t } from '@opentiny/vue-locale'
import { candle } from './candle'
import { $prefix } from '@opentiny/vue-common'

export default {
  name: $prefix + 'ChartCandle',
  mixins: [Core],
  data() {
    return {
      iChartName: 'CandlestickChart'
    }
  },
  methods: {
    updateChart(data) {
      let { columns = [], rows = [] } = data
      const extra = {
        tooltipVisible: this.tooltipVisible,
        legendVisible: this.legendVisible,
        t
      }
      this.option = candle(columns, rows, this.settings, extra)
    }
  }
}
</script>
