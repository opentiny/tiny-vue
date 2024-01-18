<template>
  <tiny-button @click="add">增加</tiny-button>
  <tiny-progress type="circle" :percentage="percentage" status="exception" :width="150"></tiny-progress>
  <tiny-progress type="dashboard" :percentage="percentage" :color="customColors" :width="300"> </tiny-progress>
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
      percentage: 10,
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
      if (this.percentage === 100) {
        return
      }
      this.percentage += 10
    }
  }
}
</script>

<style scoped>
.tiny-progress {
  margin: 0 20px;
}
</style>
