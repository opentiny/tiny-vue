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

        // water-fall表示为瀑布形态，此时图中会自动添加一个Total(总和)数据
        type: 'water-fall',
        data: [
          { Name: 'NLE', Man: 5, Female: 5, Unkown: 19 },
          { Name: 'HIN', Man: 10, Female: 8, Unkown: 5 },
          { Name: 'FBP', Man: 8, Female: 2, Unkown: 19 },
          { Name: 'VEDIO', Man: 20, Female: 15, Unkown: 10 },
          { Name: 'SASS', Man: 6, Female: 10, Unkown: 2 },
          { Name: 'RDS', Man: 12, Female: 15, Unkown: 10 },
          { Name: 'E-SYS', Man: 19, Female: 12, Unkown: 8 }
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
