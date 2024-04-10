<template>
  <div class="hui-chart chart-box" ref="chartRef" :style="{ width, height }"></div>
</template>

<script>
import Core from '@opentiny/vue-chart-core'
import { wordcloud } from './wordcloud'
import 'echarts-wordcloud'

export default {
  name: 'ChartWordcloud',
  mixins: [Core],

  data() {
    return {
      iChartName: 'WordCloudChart'
    }
  },
  methods: {
    updateChart() {
      const { columns = [], rows = [] } = this.data

      const extra = {
        tooltipVisible: this.tooltipVisible
      }
      const option = wordcloud(columns, rows, this.settings, extra)
      this.option = {
        ...option
      }
    }
  }
}
</script>
