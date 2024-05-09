<template>
  <div>
    <tiny-waterfall :options="options"></tiny-waterfall>
  </div>
</template>

<script lang="jsx">
import { ChartWaterfall } from '@opentiny/vue'

export default {
  components: {
    TinyWaterfall: ChartWaterfall
  },
  data() {
    return {
      options: {
        padding: [30, 90, 50, 20],
        legend: {
          show: true
        },

        // 'range'柱状图为区间形态，区间柱状图用于描述数据从最小值到最大值的区域
        type: 'range',

        // 横向状态
        direction: 'horizontal',
        data: [
          { Name: 'NLE', User: [5, 20] },
          { Name: 'HIN', User: [10, 30] },
          { Name: 'FBP', User: [12, 25] },
          { Name: 'VEDIO', User: [14, 40] },
          { Name: 'SASS', User: [6, 35] },
          { Name: 'RDS', User: [12, 30] },
          { Name: 'E-SYS', User: [12, 20] }
        ],
        xAxis: {
          data: 'Name'
        },
        yAxis: {
          name: 'Number'
        }
      }
    }
  }
}
</script>
