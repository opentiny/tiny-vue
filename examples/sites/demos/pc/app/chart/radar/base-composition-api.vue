<template>
  <div>
    <tiny-radar :options="options"></tiny-radar>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ChartRadar as TinyRadar } from '@opentiny/vue'

const options = ref({
  legend: {
    show: true,
    position: {
      left: 'center',
      bottom: 20.1
    },
    orient: 'horizontal'
  },

  // radarMax 用来设置雷达图最外圈的数值
  // 当不设置 radarMax 时， 雷达图坐标系为数据中的最大值
  radarMax: 100,
  data: {
    'Domestic': {
      'Equipment': 41,
      'VM': 91,
      'CSP': 81,
      'RD': 51,
      'Markets': 71
    }
  }
})
</script>
