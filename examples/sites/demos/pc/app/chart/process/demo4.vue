<template>
  <div>
    <tiny-process :options="options"></tiny-process>
  </div>
</template>

<script lang="jsx">
import { HuichartsProcess } from '@opentiny/vue'

export default {
  components: {
    TinyProcess: HuichartsProcess
  },
  data() {
    return {
      options: {
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
      }
    }
  }
}
</script>
