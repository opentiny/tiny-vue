<template>
  <div class="hui-chart chart-box" ref="chartRef" :style="{ width, height }"></div>
</template>

<script>
import Core from '@opentiny/vue-chart-core-beta'
import { t } from '@opentiny/vue-locale'
import { pie } from './ring'

export default {
  name: 'ChartRing',
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
        tooltipVisible: this.tooltipVisible,
        t
      }
      this.option = pie(columns, rows, this.settings, extra, true)
    }
  }
}
</script>
