<template>
  <div class="hui-chart chart-box">
    <div ref="chartRef" :style="{ width, height }"></div>
    <slot></slot>
  </div>
</template>

<script>
import Core from '@opentiny/vue-huicharts-core'
import { sankey } from './sankey'
import { $prefix } from '@opentiny/vue-common'

export default {
  name: $prefix + 'ChartSankey',
  mixins: [Core],

  data() {
    return {
      iChartName: 'SankeyChart'
    }
  },
  methods: {
    updateChart() {
      let { columns = [], rows = [] } = this.data

      const extra = {
        legendVisible: this.legendVisible,
        tooltipVisible: this.tooltipVisible
      }
      const option = sankey(columns, rows, this.settings, extra)
      this.option = {
        ...option
      }
    }
  }
}
</script>
