<template>
  <div>
    <tiny-heatmap :options="options"></tiny-heatmap>
  </div>
</template>

<script lang="jsx">
import { HuichartsHeatmap } from '@opentiny/vue'

export default {
  components: {
    TinyHeatmap: ChartHeatmap
  },
  data() {
    return {
      options: {
        // 图表类型(矩形热力图)
        type: 'CalendarHeatMapChart',

        // padding控制图表距离容器的上，右，下，左padding值
        padding: [50, 120, 20, 20],

        // 矩形的颜色，默认值'#1F55B5'
        color: '#1F55B5',

        // 视觉滑块的配置，本属性显示视觉滑块，不传不显示
        handle: {
          // 是否反转显示文本，默认值false
          inverse: true,

          // 两端的文本，默认值为data第三个属性值的最大值和最小值
          text: ['亮', '暗'],

          // 水平与垂直放置，默认值vertical
          // vertical 或者 horizontal
          orient: 'vertical',

          // 视觉滑块的宽度，默认值20
          width: 16,

          // 视觉滑块的高度，默认值400
          height: 390,

          // 是否显示手柄，默认值不显示
          calculable: true,

          position: {
            bottom: '6%',
            right: '4%'
          }
        },
        data: [
          { Name: 'Q1', Week: 'Monday', Value: 86 },
          { Name: 'Q1', Week: 'Thesday', Value: 66 },
          { Name: 'Q1', Week: 'Wednesday', Value: 78 },
          { Name: 'Q1', Week: 'Thursday', Value: 58 },
          { Name: 'Q1', Week: 'Firday', Value: 66 },

          { Name: 'Q2', Week: 'Monday', Value: 36 },
          { Name: 'Q2', Week: 'Thesday', Value: 22 },
          { Name: 'Q2', Week: 'Wednesday', Value: 99 },
          { Name: 'Q2', Week: 'Thursday', Value: 67 },
          { Name: 'Q2', Week: 'Firday', Value: 66 },

          { Name: 'Q3', Week: 'Monday', Value: 77 },
          { Name: 'Q3', Week: 'Thesday', Value: 46 },
          { Name: 'Q3', Week: 'Wednesday', Value: 30 },
          { Name: 'Q3', Week: 'Thursday', Value: 31 },
          { Name: 'Q3', Week: 'Firday', Value: 56 },

          { Name: 'Q4', Week: 'Monday', Value: 59 },
          { Name: 'Q4', Week: 'Thesday', Value: 48 },
          { Name: 'Q4', Week: 'Wednesday', Value: 29 },
          { Name: 'Q4', Week: 'Thursday', Value: 38 },
          { Name: 'Q4', Week: 'Firday', Value: 16 },

          { Name: 'Q5', Week: 'Monday', Value: 76 },
          { Name: 'Q5', Week: 'Thesday', Value: 66 },
          { Name: 'Q5', Week: 'Wednesday', Value: 17 },
          { Name: 'Q5', Week: 'Thursday', Value: 81 },
          { Name: 'Q5', Week: 'Firday', Value: 86 }
        ]
      }
    }
  }
}
</script>
