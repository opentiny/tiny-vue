<template>
  <div>
    <tiny-histogram :options="options"></tiny-histogram>
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
        padding: [40, 10, 40, 10],
        data: [
          { 'Month': 'Jan', 'Domestic': 33, 'Abroad': 1 },
          { 'Month': 'Feb', 'Domestic': 27, 'Abroad': 39 },
          { 'Month': 'Mar', 'Domestic': 31, 'Abroad': 20 },
          { 'Month': 'Apr', 'Domestic': 30, 'Abroad': 15 },
          { 'Month': 'May', 'Domestic': 37, 'Abroad': 1 },
          { 'Month': 'Jun', 'Domestic': 36, 'Abroad': 17 }
        ],
        xAxis: 'Month',
        yAxis: {
          name: 'Percent(%)'
        }
      }
    }
  }
}
</script>
