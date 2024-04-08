<template>
  <div class="hui-chart chart-box" ref="chartRef" :style="{ height }"></div>
</template>

<script>
import { tree } from './tree'
import Core from '@opentiny/vue-chart-core'

export default {
  name: 'ChartTree',
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
