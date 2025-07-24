<template>
  <div>
    <tiny-color-picker v-model="color" :history="history" :enable-history="enableHistory" />
    <br />
    <tiny-button @click="addHistoryColor">Append history color</tiny-button>
    <tiny-button @click="popHistoryColor">Pop history color</tiny-button>
    <tiny-button @click="enableHistory = !enableHistory">Toggle History visibility</tiny-button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyColorPicker, TinyButton } from '@opentiny/vue'

const color = ref('#66ccff')
const history = ref([])
const randomHex = () =>
  '#' +
  Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, '0')
const addHistoryColor = () => {
  history.value.push(randomHex())
}
const popHistoryColor = () => {
  history.value.pop()
}
const enableHistory = ref(false)
</script>
