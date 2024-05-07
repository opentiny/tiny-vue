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
        xAxisType: 'value',
        data: {
          '1990': [
            [28604, 77, 1709866, 'Australia', 1990],
            [31163, 77.4, 27662440, 'Canada', 1990],
            [60001, 68, 1154605773, 'China', 1990],
            [13670, 74.7, 10582082, 'Cuba', 1990],
            [28599, 75, 4986705, 'Finland', 1990]
          ],
          '2000': [
            [19349, 69.6, 147568552, 'Russia', 2000],
            [10670, 67.3, 53994606, 'Turkey', 2000],
            [26424, 75.7, 57110117, 'United Kingdom', 2000],
            [37062, 75.4, 252847810, 'United States', 2000],
            [23038, 73.13, 143456918, 'Russia', 2000]
          ],
          '2015': [
            [44056, 81.8, 23968976, 'Australia', 2015],
            [43294, 81.7, 35939927, 'Canada', 2015],
            [13334, 76.9, 1376048943, 'Cuba', 2015],
            [21291, 78.5, 11389566, 'Finland', 2015],
            [38923, 80.8, 5503457, 'France', 2015]
          ]
        }
      }
    }
  }
}
</script>
