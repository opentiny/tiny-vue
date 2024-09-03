<template>
  <div class="hui-chart chart-box" ref="chartRef" :style="{ width, height }"></div>
</template>

<script>
import Core from '@opentiny/vue-huicharts-core'
import { getIChartOption } from './funnel'
import { $prefix } from '@opentiny/vue-common'

export default {
  name: $prefix + 'ChartFunnel',
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
