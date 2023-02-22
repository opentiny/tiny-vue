<template>
  <div>
    <tiny-histogram :data="chartData" :extend="chartExtend1" height="400px" width="auto"></tiny-histogram>
    <tiny-histogram :data="chartData" :extend="chartExtend2"></tiny-histogram>
    <tiny-histogram :data="chartData" :extend="chartExtend3"></tiny-histogram>
  </div>
</template>

<script>
import { ChartHistogram } from '@opentiny/vue'

export default {
  components: {
    TinyHistogram: ChartHistogram
  },
  data() {
    return {
      chartData: {
        columns: ['日期', '成本', '利润'],
        rows: [
          { 日期: '1月1日', 成本: 15, 利润: 12 },
          { 日期: '1月2日', 成本: 12, 利润: 25 },
          { 日期: '1月3日', 成本: 21, 利润: 10 },
          { 日期: '1月4日', 成本: 41, 利润: 32 },
          { 日期: '1月5日', 成本: 31, 利润: 30 },
          { 日期: '1月6日', 成本: 71, 利润: 55 }
        ]
      },
      // chartExtend1、chartExtend2、chartExtend3 设置是等效的
      chartExtend1: {
        series: [
          {
            barWidth: 10
          },
          {
            barWidth: 10
          }
        ],
        tooltip: {
          trigger: 'none'
        }
      },
      chartExtend2: {
        series: {
          barWidth: 10
        },
        tooltip: {
          trigger: 'none'
        }
      },
      chartExtend3: {
        series(v) {
          v.forEach((i) => {
            i.barWidth = 10
          })

          return v
        },
        tooltip(v) {
          v.trigger = 'none'

          return v
        }
      }
    }
  }
}
</script>
