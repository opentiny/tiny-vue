<template>
  <div>
    <tiny-scatter :options="options"></tiny-scatter>
  </div>
</template>

<script lang="jsx">
import { ChartScatter } from '@opentiny/vue'

export default {
  components: {
    TinyScatter: ChartScatter
  },
  data() {
    return {
      options: {
        padding: [50, 30, 50, 20],
        legend: {
          orient: 'horizontal',
          show: true,
          position: {
            left: 'center',
            bottom: 15
          }
        },

        // 气泡大小范围，默认值为[10，70]
        // 气泡半径维度决定了气泡的大小，bubbleSize决定了气泡大小的上下限
        bubbleSize: [20, 100],
        xAxisType: 'category',
        yAxisNameL: 'Member',
        data: {
          'Bus': [
            ['Q1', 70, 20, 'Q1', 'Bus'],
            ['Q2', 80, 15, 'Q2', 'Bus'],
            ['Q3', 200, 60, 'Q3', 'Bus'],
            ['Q4', 160, 40, 'Q4', 'Bus']
          ],
          'Car': [
            ['Q1', 95, 30, 'Q1', 'Car'],
            ['Q2', 120, 60, 'Q2', 'Car'],
            ['Q3', 180, 40, 'Q3', 'Car'],
            ['Q4', 230, 60, 'Q4', 'Car']
          ],
          'Bicycle': [
            ['Q1', 268, 50, 'Q1', 'Bicycle'],
            ['Q2', 150, 36, 'Q2', 'Bicycle'],
            ['Q3', 110, 20, 'Q3', 'Bicycle'],
            ['Q4', 50, 40, 'Q4', 'Bicycle']
          ]
        }
      }
    }
  }
}
</script>
