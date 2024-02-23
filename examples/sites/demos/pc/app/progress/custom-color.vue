<template>
  <div>
    <tiny-button @click="add" class="mb10"> 点击增加改变颜色 </tiny-button>
    <tiny-progress :percentage="value" :color="customColor" :stroke-width="24"></tiny-progress>
    <br />
    <tiny-progress :percentage="value" :color="customColorMethod" :stroke-width="24"></tiny-progress>
    <br />
    <tiny-progress :percentage="value" :color="customColors" :stroke-width="24"></tiny-progress>
  </div>
</template>

<script lang="jsx">
import { Progress, Button } from '@opentiny/vue'

export default {
  components: {
    TinyProgress: Progress,
    TinyButton: Button
  },
  data() {
    return {
      value: 20,
      customColor: '#409eff',
      // 在什么进度显示什么样的颜色
      customColors: [
        { color: '#f56c6c', percentage: 20 },
        { color: '#e6a23c', percentage: 40 },
        { color: '#5cb87a', percentage: 60 },
        { color: '#1989fa', percentage: 80 },
        { color: '#6f7ad3', percentage: 100 }
      ]
    }
  },
  methods: {
    add() {
      if (this.value + 20 > 100) {
        return
      }
      this.value += 20
    },
    // 在什么进度显示什么样的颜色
    customColorMethod(percentage) {
      if (percentage < 30) {
        return '#909399'
      } else if (percentage < 70) {
        return '#e6a23c'
      } else {
        return '#67c23a'
      }
    }
  }
}
</script>
