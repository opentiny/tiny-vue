<template>
  <div>
    <tiny-histogram :data="chartData" :settings="chartSettings" :extend="extend"></tiny-histogram>
  </div>
</template>

<script>
import { ChartHistogram } from '@opentiny/vue'

export default {
  components: {
    TinyHistogram: ChartHistogram
  },
  data() {
    return {
      chartData: {
        columns: ['date', 'PV', 'Order', 'OrderRate'],
        rows: [
          { date: '1/1', PV: 1393, Order: 1093, OrderRate: 0.32 },
          { date: '1/2', PV: 3530, Order: 3230, OrderRate: 0.26 },
          { date: '1/3', PV: 2923, Order: 2623, OrderRate: 0.76 },
          { date: '1/4', PV: 1723, Order: 1423, OrderRate: 0.49 },
          { date: '1/5', PV: 3792, Order: 3492, OrderRate: 0.323 },
          { date: '1/6', PV: 4593, Order: 4293, OrderRate: 0.78 }
        ]
      },
      // 修改别名
      chartSettings: {
        labelMap: {
          PV: '访问用户',
          Order: '下单用户'
        },
        legendName: {
          访问用户: '访问用户 total: 10000'
        }
      },
      extend: {}
    }
  }
}
</script>
