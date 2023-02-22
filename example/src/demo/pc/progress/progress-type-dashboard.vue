<template>
  <tiny-progress type="dashboard" :percentage="percentage" :color="customColors" :width="300"> </tiny-progress>
</template>

<script>
import { Progress } from '@opentiny/vue'

export default {
  components: {
    TinyProgress: Progress
  },
  data() {
    return {
      percentage: 20,
      customColor: '#409eff',
      customColors: [
        { color: '#f56c6c', percentage: 25 },
        { color: '#e6a23c', percentage: 45 },
        { color: '#5cb87a', percentage: 55 },
        { color: '#1989fa', percentage: 75 },
        { color: '#6f7ad3', percentage: 100 }
      ]
    }
  }
}
</script>
