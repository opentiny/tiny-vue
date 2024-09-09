<template>
  <div>
    <tiny-histogram :options="options" :extend="chartExtend1" height="400px" width="auto"></tiny-histogram>
    <tiny-histogram :options="options" :extend="chartExtend2"></tiny-histogram>
    <tiny-histogram :options="options" :extend="chartExtend3"></tiny-histogram>
  </div>
</template>

<script lang="jsx">
import { HuichartsHistogram } from '@opentiny/vue'

export default {
  components: {
    TinyHistogram: ChartHistogram
  },
  data() {
    return {
      options: {
        padding: [50, 30, 50, 20],
        legend: {
          show: true,
          icon: 'line'
        },
        data: [
          { 'Month': 'Jan', 'Domestics': 33, 'Abroad': 37 },
          { 'Month': 'Feb', 'Domestics': 27, 'Abroad': 39 },
          { 'Month': 'Mar', 'Domestics': 31, 'Abroad': 20 },
          { 'Month': 'Apr', 'Domestics': 30, 'Abroad': 15 },
          { 'Month': 'May', 'Domestics': 37, 'Abroad': 13 },
          { 'Month': 'Jun', 'Domestics': 36, 'Abroad': 17 },
          { 'Month': 'Jul', 'Domestics': 42, 'Abroad': 22 },
          { 'Month': 'Aug', 'Domestics': 22, 'Abroad': 12 },
          { 'Month': 'Sep', 'Domestics': 17, 'Abroad': 30 },
          { 'Month': 'Oct', 'Domestics': 40, 'Abroad': 33 },
          { 'Month': 'Nov', 'Domestics': 42, 'Abroad': 22 },
          { 'Month': 'Dec', 'Domestics': 32, 'Abroad': 11 }
        ],
        xAxis: {
          data: 'Month'
        },
        yAxis: {
          name: 'precentage(%)'
        }
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
