<template>
  <div>
    <tiny-ring :data="chartData" :settings="chartSettings" :extend="extend1"></tiny-ring>
  </div>
</template>

<script>
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
        dataType: 'KMB'
      },
      extend1: {
        title: {
          subtext: '999911111111111\n6666\n333',
          top: '42%', // 4.7.0 echarts的top:middle失效，可设置百分比控制居中
          left: 'center',
          show: true,
          text: '6666'
        }
      }
    }
  }
}
</script>
