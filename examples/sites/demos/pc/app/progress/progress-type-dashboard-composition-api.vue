<template>
  <tiny-progress type="dashboard" :percentage="percentage" :color="customColors" :width="300"> </tiny-progress>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Progress as TinyProgress } from '@opentiny/vue'

const percentage = ref(20)
const customColor = ref('#409eff')
const customColors = ref([
  { color: '#f56c6c', percentage: 20 },
  { color: '#e6a23c', percentage: 40 },
  { color: '#5cb87a', percentage: 60 },
  { color: '#1989fa', percentage: 80 },
  { color: '#6f7ad3', percentage: 100 }
])

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
