<template>
  <div>
    <div>
      <tiny-button :icon="IconMinus" :reset-time="0" @click="decrease"></tiny-button>
      <tiny-button :icon="IconPlus" :reset-time="0" @click="increase"></tiny-button>
    </div>
    <br />
    <tiny-progress class="progress-first" :stroke-width="4" :percentage="percentage"></tiny-progress>
    <br />
    <tiny-progress class="progress-second" :stroke-width="24" :percentage="percentage"></tiny-progress>
    <div class="tip" v-if="percentage !== 100">努力加载中，请稍后...</div>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Progress as TinyProgress, Button as TinyButton } from '@opentiny/vue'
import { iconMinus, iconPlus } from '@opentiny/vue-icon'

const percentage = ref(20)
const IconMinus = iconMinus()
const IconPlus = iconPlus()

function increase() {
  percentage.value += 10
  if (percentage.value > 100) {
    percentage.value = 100
  }
}

function decrease() {
  percentage.value -= 10
  if (percentage.value < 0) {
    percentage.value = 0
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
