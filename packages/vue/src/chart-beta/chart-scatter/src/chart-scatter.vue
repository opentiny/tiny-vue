<template>
  <div class="hui-chart chart-box" ref="chartRef" :style="{ width, height }"></div>
</template>

<script>
import Core from '@opentiny/vue-chart-core-beta'
import { scatter } from './scatter'

export default {
  name: 'ChartScatter',
  mixins: [Core],

  data() {
    return {
      iChartName: 'BubbleChart'
    }
  },
  methods: {
    updateChart() {
      let { columns = [], rows = [] } = this.data

      const extra = {
        legendVisible: this.legendVisible,
        tooltipVisible: this.tooltipVisible
      }
      const option = scatter(columns, rows, this.settings, extra)
      this.option = { ...option }
    }
  }
}
</script>
