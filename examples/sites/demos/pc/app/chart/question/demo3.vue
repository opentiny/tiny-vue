<template>
  <tiny-line :data="chartData" :settings="chartSettings"> </tiny-line>
</template>

<script lang="jsx">
import { ChartLine } from '@opentiny/vue'

export default {
  components: {
    TinyLine: ChartLine
  },
  data() {
    this.chartSettings = {
      yAxisType: ['percent'],
      digit: 3
    }
    return {
      chartData: {
        columns: ['日期', 'value'],
        rows: [
          { 日期: '1月1日', value: 0.00001 },
          { 日期: '1月2日', value: 0.00002 },
          { 日期: '1月3日', value: 0.00003 },
          { 日期: '1月4日', value: 0.00004 },
          { 日期: '1月5日', value: 0.00005 },
          { 日期: '1月6日', value: 0.00006 }
        ]
      }
    }
  }
}
</script>
