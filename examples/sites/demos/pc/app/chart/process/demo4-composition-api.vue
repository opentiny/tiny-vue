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
  theme: 'hwCloud-light',
  padding: [32, 32, 0, 32],
  state: {
    error: 75,
    warning: 60,
    subwarning: 50,
    success: 20
  },
  data: [
    { name: 'UniEPMgr', value: 80 },
    { name: 'SMLoglic', value: 65 },
    { name: 'SSO', value: 55 },
    { name: 'APIMgr', value: 35 },
    { name: 'Logtransfer', value: 12 }
  ]
})
</script>
