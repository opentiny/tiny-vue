<template>
  <div>
    <tiny-bar :options="options"></tiny-bar>
  </div>
</template>

<script lang="jsx">
import { ChartBar } from '@opentiny/vue'

export default {
  components: {
    TinyBar: ChartBar
  },
  data() {
    return {
      options: {
        data: [
          { 日期: '1/1', 访问用户: 1393, 下单用户: 1093, 下单率: 0.32 },
          { 日期: '1/2', 访问用户: 3530, 下单用户: 3230, 下单率: 0.26 },
          { 日期: '1/3', 访问用户: 2923, 下单用户: 2623, 下单率: 0.76 },
          { 日期: '1/4', 访问用户: 1723, 下单用户: 1423, 下单率: 0.49 },
          { 日期: '1/5', 访问用户: 3792, 下单用户: 3492, 下单率: 0.323 },
          { 日期: '1/6', 访问用户: 4593, 下单用户: 4293, 下单率: 0.78 }
        ],
        type: 'stack',
        xAxis: {
          data: '日期'
        },
        direction: 'horizontal' // 横向柱状图
      }
    }
  }
}
</script>
