<template>
  <div class="hui-chart chart-box">
    <div ref="chartRef" :style="{ width, height }"></div>
    <slot></slot>
  </div>
</template>

<script>
import Core from '@opentiny/vue-huicharts-core'
import { $prefix } from '@opentiny/vue-common'
import { wordcloud } from './wordcloud'
import 'echarts-wordcloud'

export default {
  name: $prefix + 'ChartWordcloud',
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
