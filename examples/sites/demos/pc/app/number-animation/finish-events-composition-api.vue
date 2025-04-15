<template>
  <tiny-number-animation ref="numberAnimationRef" :from="fromVal" :to="toVal" :active="false" @finish="handleFinish" />
  <tiny-button @click="handleClick">播放</tiny-button>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyButton, TinyNumberAnimation, TinyModal } from '@opentiny/vue'

const numberAnimationRef = ref(null)
const fromVal = ref(0)
const toVal = ref(900)

function handleClick() {
  numberAnimationRef.value?.play()
}
function handleFinish() {
  TinyModal.message({ message: '动画结束了', status: 'info' })
}
</script>
