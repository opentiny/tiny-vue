<template>
  <div>
    <tiny-pie :data="chartData" :settings="chartSettings"></tiny-pie>
  </div>
</template>

<script lang="jsx">
import { ChartPie } from '@opentiny/vue'

export default {
  components: {
    TinyPie: ChartPie
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
      // 设置饼图半径边距
      chartSettings: {
        radius: 10,
        offsetY: 300
      }
    }
  }
}
</script>
