<template>
  <div>
    <tiny-chart-process :options="options"></tiny-chart-process>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { HuichartsProcess as TinyChartProcess } from '@opentiny/vue'

const options = ref({
  name: 'ProcessBarChart',
  theme: 'light',
  type: 'double-sides',
  padding: [48, '6%', 20, '6%'],
  color: ['#00aaee', '#41ba41'],
  legend: {
    show: true,
    right: '3%',
    left: 'auto',
    top: '3%'
  },
  data: [
    {
      name: 'China',
      children: [
        { name: 'Game', value: 30 },
        { name: 'Move', value: 20 },
        { name: 'Animation', value: 45 },
        { name: 'Fiction', value: 60 }
      ]
    },
    {
      name: 'Mexico',
      children: [
        { name: 'School', value: 12 },
        { name: 'Hospital', value: 14 },
        { name: 'Cinema', value: 33 },
        { name: 'Library', value: 44 }
      ]
    }
  ]
})
</script>
