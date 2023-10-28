<template>
  <div>
    <tiny-progress :percentage="50" :color="customColor"></tiny-progress>
    <tiny-progress :percentage="50" :color="customColorMethod"></tiny-progress>
    <tiny-progress :percentage="50" :color="customColors"></tiny-progress>
  </div>
</template>

<script lang="jsx">
import { Progress } from '@opentiny/vue'

export default {
  components: {
    TinyProgress: Progress
  },

  data() {
    return {
      customColor: '#409eff',
      // 在什么进度显示什么样的颜色
      customColors: [
        { color: '#f56c6c', percentage: 25 },
        { color: '#e6a23c', percentage: 35 },
        { color: '#5cb87a', percentage: 55 },
        { color: '#1989fa', percentage: 75 },
        { color: '#6f7ad3', percentage: 100 }
      ]
    }
  },
  methods: {
    // 在什么进度显示什么样的颜色
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
