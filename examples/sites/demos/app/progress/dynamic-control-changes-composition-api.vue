<template>
  <div>
    <div>
      <tiny-button :icon="IconMinus" :reset-time="0" @click="decrease"></tiny-button>
      <tiny-button :icon="IconPlus" :reset-time="0" @click="increase"></tiny-button>
    </div>
    <br />
    <tiny-progress
      class="progress"
      :stroke-width="24"
      :text-inside="testInside"
      :percentage="percentage"
    ></tiny-progress>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Progress as TinyProgress, Button as TinyButton } from '@opentiny/vue'
import { iconMinus, iconPlus } from '@opentiny/vue-icon'

const testInside = ref(true)
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
