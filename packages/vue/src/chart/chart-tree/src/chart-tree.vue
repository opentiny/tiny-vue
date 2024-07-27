<template>
  <div class="hui-chart chart-box">
    <div ref="chartRef" :style="{ width, height }"></div>
    <slot></slot>
  </div>
</template>

<script>
import { tree } from './tree'
import Core from '@opentiny/vue-chart-core'
import { $prefix } from '@opentiny/vue-common'

export default {
  name: $prefix + 'ChartTree',
  mixins: [Core],
  data() {
    return {
      iChartName: 'TreeChart',
      option: {}
    }
  },
  methods: {
    updateChart() {
      let { columns = [], rows = [] } = this.data

      const extra = {
        tooltipVisible: this.tooltipVisible,
        legendVisible: this.legendVisible,
        tooltipFormatter: this.tooltipFormatter
      }

      const option = tree(columns, rows, this.settings, extra)
      this.option = { ...option }
    }
  }
}
</script>
