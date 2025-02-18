<template>
  <tiny-line :data="chartData" :settings="chartSettings"> </tiny-line>
</template>

<script lang="jsx">
import { TinyHuichartsLine } from '@opentiny/vue'

export default {
  components: {
    TinyLine: TinyHuichartsLine
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
          { 日期: '1 月 1 日', value: 0.00001 },
          { 日期: '1 月 2 日', value: 0.00002 },
          { 日期: '1 月 3 日', value: 0.00003 },
          { 日期: '1 月 4 日', value: 0.00004 },
          { 日期: '1 月 5 日', value: 0.00005 },
          { 日期: '1 月 6 日', value: 0.00006 }
        ]
      }
    }
  }
}
</script>
