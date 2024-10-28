<template>
  <div>
    <tiny-line :options="options"></tiny-line>
  </div>
</template>

<script lang="jsx">
import { HuichartsLine } from '@opentiny/vue'

export default {
  components: {
    TinyLine: HuichartsLine
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
          { 'Month': 'Jan', 'Domestic': 33, 'Abroad': 1 },
          { 'Month': 'Feb', 'Domestic': 27, 'Abroad': 39 },
          { 'Month': 'Mar', 'Domestic': 31, 'Abroad': 20 },
          { 'Month': 'Apr', 'Domestic': 30, 'Abroad': 15 },
          { 'Month': 'May', 'Domestic': 37, 'Abroad': 1 },
          { 'Month': 'Jun', 'Domestic': 36, 'Abroad': 17 },
          { 'Month': 'Jul', 'Domestic': 42, 'Abroad': 22 },
          { 'Month': 'Aug', 'Domestic': 22, 'Abroad': 12 },
          { 'Month': 'Sep', 'Domestic': 17, 'Abroad': 30 },
          { 'Month': 'Oct', 'Domestic': 40, 'Abroad': 33 },
          { 'Month': 'Nov', 'Domestic': 42, 'Abroad': 22 },
          { 'Month': 'Dec', 'Domestic': 32, 'Abroad': 1 }
        ],
        xAxis: 'Month',

        // 自定义y轴
        yAxis: [
          {
            name: 'Percent(%)', // 名称
            max: 65, // 最大值
            min: 0, // 最小值
            interval: 5, // 数值间距
            nameTextStyle: {
              // 名称样式
              padding: [20, 0, 0, 20]
            },
            unit: '%' // 单位
          }
        ]
      }
    }
  }
}
</script>
