<template>
  <div>
    <tiny-heatmap :options="options"></tiny-heatmap>
  </div>
</template>

<script lang="jsx">
import { HuichartsHeatmap } from '@opentiny/vue'

export default {
  components: {
    TinyHeatmap: HuichartsHeatmap
  },
  data() {
    return {
      options: {
        // 图表类型(矩形热力图)
        type: 'RectangularHeatMapChart',

        // 矩形的颜色，默认值#F43146
        color: '#F43146',

        // 矩形的大小，默认值8
        rectangleSize: 8,
        yAxisName: '手机市场占比%',
        data: [
          [11, 10, 10, 'Australia'],
          [30, 20, 21, 'Canada'],
          [40, 60, 29, 'China'],
          [50, 5, 30, 'Cuba'],
          [55, 10, 31, 'Finland'],
          [11, 30, 35, 'France'],
          [32, 50, 48, 'Germany'],
          [12, 40, 55, 'Iceland'],
          [12, 33, 60, 'India'],
          [11, 58, 50, 'Japan']
        ]
      }
    }
  }
}
</script>
