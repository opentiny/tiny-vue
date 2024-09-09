<template>
  <div>
    <tiny-pie :options="options"></tiny-pie>
  </div>
</template>

<script lang="jsx">
import { HuichartsPie } from '@opentiny/vue'

export default {
  components: {
    TinyPie: ChartPie
  },
  data() {
    return {
      options: {
        type: 'pie',
        legend: {
          show: true,

          // 可滚动的图例，生成切换按钮
          type: 'scroll',

          // 切换按钮在图例的位置
          pageButtonPosition: 'end',

          // 图例的宽度
          width: '80%',
          position: {
            left: 'center',
            bottom: 40
          }
        },
        label: {
          show: true
        },
        data: [
          { value: 20, name: '系列1' },
          { value: 9, name: '系列2' },
          { value: 14, name: '系列3' },
          { value: 8, name: '系列4' },
          { value: 16, name: '系列5' },
          { value: 10, name: '系列6' },
          { value: 16, name: '系列7' },
          { value: 4, name: '系列8' },
          { value: 6, name: '系列9' },
          { value: 13, name: '系列10' }
        ]
      }
    }
  }
}
</script>
