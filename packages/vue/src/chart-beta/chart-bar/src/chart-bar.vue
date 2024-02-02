<template>
  <div class="hui-chart chart-box" ref="chartRef" :style="{ height }"></div>
</template>

<script>
import { histogram } from './histogram'
import Core from '@opentiny/vue-chart-core-beta'

export default {
  name: 'ChartBar',
  mixins: [Core],
  data() {
    return {
      iChartName: 'BarChart',
      option: {}
    }
  },
  methods: {
    updateChart() {
      let { columns = [], rows = [] } = this.data

      const extra = {
        tooltipVisible: this.tooltipVisible,
        legendVisible: this.legendVisible,
        extend: this.extend
      }

      const option = histogram(columns, rows, this.settings, extra, false)

      this.option = {
        smooth: true,
        ...option,
        direction: 'horizontal'
      }
    }
  }
}
</script>
