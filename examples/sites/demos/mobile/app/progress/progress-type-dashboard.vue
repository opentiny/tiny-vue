<template>
  <tiny-progress type="dashboard" :percentage="percentage" :color="tinyColors" :width="124"> </tiny-progress>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyProgress } from '@opentiny/vue-mobile'

const percentage = ref(20)
const customColor = ref('#409eff')
const tinyColors = ref([
  { color: '#f56c6c', percentage: 25 },
  { color: '#e6a23c', percentage: 35 },
  { color: '#5cb87a', percentage: 55 },
  { color: '#1989fa', percentage: 75 },
  { color: '#6f7ad3', percentage: 100 }
])

function customColorMethod(percentage) { // NISVUE3 FIXME: percentage重复定义，请手工修改
  if (percentage < 45) {
    return '#909399'
  } else if (percentage < 75) {
    return '#e6a23c'
  } else {
    return '#67c23a'
  }
}
</script>
