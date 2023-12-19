<template>
  <div class="hui-chart chart-box" ref="chartRef" :style="{ width, height }"></div>
</template>

<script>
import Core from '@opentiny/vue-chart-core-beta'
import { pie } from './pie'

export default {
  name: 'ChartPie',
  mixins: [Core],

  data() {
    return {
      iChartName: 'PieChart'
    }
  },
  methods: {
    updateChart() {
      let { columns = [], rows = [] } = this.data

      const extra = {
        legendVisible: this.legendVisible,
        tooltipVisible: this.tooltipVisible
      }
      this.option = pie(columns, rows, this.settings, extra)
    }
  }
}
</script>
