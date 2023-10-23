<template>
  <div>
    <tiny-progress class="progress-first" :stroke-width="4" :percentage="percentage"></tiny-progress>
    <tiny-progress class="progress-second" :stroke-width="12" :percentage="percentage"></tiny-progress>
    <div class="tip" v-if="percentage !== 100">努力加载中，请稍后...</div>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Progress as TinyProgress } from '@opentiny/vue'

const percentage = ref(70)
</script>

<style scoped>
.tip {
  margin-top: 16px;
  text-align: center;
  font-size: 14px;
  color: #808080;
}
.progress-first :deep(.tiny-progress__text) {
  font-size: 12px !important;
}
.progress-second :deep(.tiny-progress__text) {
  font-size: 14px !important;
}
</style>
