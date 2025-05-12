<template>
  <tiny-number-animation ref="numberAnimationRef" :from="fromVal" :to="toVal" />
  <tiny-button @click="handleClick">播放</tiny-button>
</template>

<script setup>
import { ref } from 'vue'
import { TinyButton, TinyNumberAnimation } from '@opentiny/vue'

const numberAnimationRef = ref(null)
const fromVal = ref(0)
const toVal = ref(12309)
function handleClick() {
  numberAnimationRef.value?.play()
}
</script>
