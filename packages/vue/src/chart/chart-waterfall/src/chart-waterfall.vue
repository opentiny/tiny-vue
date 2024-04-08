<template>
  <div class="hui-chart chart-box" ref="chartRef" :style="{ width, height }"></div>
</template>

<script>
import Core from '@opentiny/vue-chart-core'
import { waterfall } from './waterfall'
import { t } from '@opentiny/vue-locale'

export default {
  name: 'ChartWaterfall',
  mixins: [Core],
  data() {
    return {
      iChartName: 'BarChart'
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
      const option = waterfall(columns, rows, this.settings, extra)

      this.option = {
        ...option
      }
    }
  }
}
</script>
