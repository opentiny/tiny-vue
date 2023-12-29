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

<script setup lang="jsx">
import { ref } from 'vue'
import { Progress as TinyProgress, Button as TinyButton } from '@opentiny/vue'

const value = ref(20)
const customColor = ref('#409eff')
// 在什么进度显示什么样的颜色
const customColors = ref([
  { color: '#f56c6c', percentage: 20 },
  { color: '#e6a23c', percentage: 40 },
  { color: '#5cb87a', percentage: 60 },
  { color: '#1989fa', percentage: 80 },
  { color: '#6f7ad3', percentage: 100 }
])

function add() {
  if (value.value + 20 > 100) {
    return
  }
  value.value += 20
}

// 在什么进度显示什么样的颜色
function customColorMethod(percentage) {
  if (percentage < 30) {
    return '#909399'
  } else if (percentage < 70) {
    return '#e6a23c'
  } else {
    return '#67c23a'
  }
}
</script>
