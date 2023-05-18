<template>
  <div>
    <tiny-progress class="progress-first" :stroke-width="4" :percentage="70"></tiny-progress>
    <tiny-progress class="progress-second" :stroke-width="12" :percentage="70"></tiny-progress>
    <div class="tip" v-if="percentage !== 100">
      努力加载中，请稍后...
    </div>
  </div>
</template>

<script lang="jsx">
import { Progress } from '@opentiny/vue'

export default {
  components: {
    TinyProgress: Progress
  }
}
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
