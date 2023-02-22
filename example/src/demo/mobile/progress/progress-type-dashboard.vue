<template>
  <tiny-progress type="dashboard" :percentage="percentage" :color="tinyColors"> </tiny-progress>
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
      tinyColors: [
        { color: '#f56c6c', percentage: 25 },
        { color: '#e6a23c', percentage: 35 },
        { color: '#5cb87a', percentage: 55 },
        { color: '#1989fa', percentage: 75 },
        { color: '#6f7ad3', percentage: 100 }
      ]
    }
  },
  methods: {
    customColorMethod(percentage) {
      if (percentage < 45) {
        return '#909399'
      } else if (percentage < 75) {
        return '#e6a23c'
      } else {
        return '#67c23a'
      }
    }
  }
}
</script>
