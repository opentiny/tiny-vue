<template>
  <tiny-number-animation ref="numberAnimationRef" :from="fromVal" :to="toVal" :active="false" :precision="4" />
  <tiny-button @click="handleClick">播放</tiny-button>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyButton, TinyNumberAnimation } from '@opentiny/vue'

const numberAnimationRef = ref(null)
const fromVal = ref(0.0)
const toVal = ref(24)
function handleClick() {
  numberAnimationRef.value?.play()
}
</script>
