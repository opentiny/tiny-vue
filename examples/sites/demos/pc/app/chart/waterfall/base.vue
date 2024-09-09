<template>
  <div>
    <tiny-waterfall :options="options"></tiny-waterfall>
  </div>
</template>

<script lang="jsx">
import { HuichartsWaterfall } from '@opentiny/vue'

export default {
  components: {
    TinyWaterfall: ChartWaterfall
  },
  data() {
    return {
      options: {
        padding: [50, 30, 20, 20],
        legend: {
          show: false
        },

        // water-fall表示为瀑布形态，此时图中会自动添加一个Total(总和)数据
        type: 'water-fall',
        data: [
          { Name: 'NLE', User: 10 },
          { Name: 'HIN', User: 20 },
          { Name: 'FBP', User: 9 },
          { Name: 'VEDIO', User: 35 },
          { Name: 'SASS', User: 20 },
          { Name: 'RDS', User: 35 },
          { Name: 'E-SYS', User: 9 }
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
