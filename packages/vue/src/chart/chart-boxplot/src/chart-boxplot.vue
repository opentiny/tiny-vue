<template>
  <div class="hui-chart chart-box" ref="chartRef" :style="{ height }"></div>
</template>

<script>
import Core from '@opentiny/vue-chart-core'
import { prepareBoxplotData } from 'echarts/extension/dataTool'
import { boxplot } from './boxplot'

export default {
  name: 'ChartBoxplot',
  mixins: [Core],
  data() {
    return {
      iChartName: 'BoxplotChart'
    }
  },
  methods: {
    updateChart(data) {
      const { columns = [], rows = [] } = data
      const extra = {
        tooltipVisible: this.tooltipVisible,
        extend: this.extend,
        data: prepareBoxplotData && Array.isArray(data) ? data : null
      }
      const option = boxplot(columns, rows, this.settings, extra)
      this.option = { ...option }
    },
    prepareBoxplotData(data) {
      return prepareBoxplotData(data)
    }
  }
}
</script>
