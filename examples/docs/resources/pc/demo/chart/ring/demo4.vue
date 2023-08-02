<template>
  <div>
    <tiny-ring :data="chartData" :settings="chartSettings"></tiny-ring>
  </div>
</template>

<script lang="jsx">
import { ChartRing } from '@opentiny/vue'

export default {
  components: {
    TinyRing: ChartRing
  },
  data() {
    return {
      chartData: {
        columns: ['日期', '访问用户'],
        rows: [
          { 日期: '1/1', 访问用户: 1393 },
          { 日期: '1/2', 访问用户: 3530 },
          { 日期: '1/3', 访问用户: 2923 },
          { 日期: '1/4', 访问用户: 1723 },
          { 日期: '1/5', 访问用户: 3792 },
          { 日期: '1/6', 访问用户: 4593 }
        ]
      },
      // 限制显示条数环图
      chartSettings: {
        limitShowNum: 3
      }
    }
  }
}
</script>
