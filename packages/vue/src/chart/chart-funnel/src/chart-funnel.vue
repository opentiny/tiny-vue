<template>
  <div class="hui-chart chart-box" ref="chartRef" :style="{ width, height }"></div>
</template>

<script>
import Core from '@opentiny/vue-chart-core'
import { getIChartOption } from './funnel'

export default {
  name: 'ChartFunnel',
  mixins: [Core],

  data() {
    return {
      iChartName: 'FunnelChart'
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
