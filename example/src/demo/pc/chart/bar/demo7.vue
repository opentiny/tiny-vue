<template>
  <div>
    <tiny-bar :data="chartData" :settings="chartSettings"></tiny-bar>
  </div>
</template>

<script>
import { ChartBar } from '@opentiny/vue'

export default {
  components: {
    TinyBar: ChartBar
  },
  data() {
    return {
      chartSettings: {
        yAxisType: 'value'
      },
      chartData: {
        columns: ['日期', '访问用户'],
        rows: [
          { 日期: 1, 访问用户: 1393 },
          { 日期: 2, 访问用户: 3530 },
          { 日期: 5, 访问用户: 2923 },
          { 日期: 10, 访问用户: 1723 },
          { 日期: 15, 访问用户: 3792 },
          { 日期: 36, 访问用户: 4593 }
        ]
      }
    }
  }
}
</script>
