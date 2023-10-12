<template>
  <tiny-pie :data="chartData" :settings="chartSettings" :events="chartEvents" judge-width> </tiny-pie>
</template>

<script lang="jsx">
import { ChartPie, Modal as TinyModal } from '@opentiny/vue'

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
      chartSettings: {
        selectedMode: 'single',
        hoverAnimation: false
      },
      chartEvents: {
        click: (data) => {
          TinyModal.alert(`被点击日期：${data.name}`)
        }
      }
    }
  }
}
</script>
