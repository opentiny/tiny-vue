<template>
  <div>
    <tiny-color-picker v-model="color" :enable-predefine-color="enablePredefineColor" :predefine="predefine" />
    <br />
    <tiny-button @click="addPredefineColor">Append predefine color</tiny-button>
    <tiny-button @click="popPredefineColor">Pop predefine color</tiny-button>
    <tiny-button @click="enablePredefineColor = !enablePredefineColor">Toggle predefine visibility</tiny-button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyColorPicker, TinyButton } from '@opentiny/vue'

const color = ref('#66ccff')
const randomHex = () =>
  '#' +
  Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, '0')
const predefine = ref(new Array(8).fill(0).map(() => randomHex()))
const addPredefineColor = () => {
  predefine.value.push(randomHex())
}
const popPredefineColor = () => {
  predefine.value.pop()
}
const enablePredefineColor = ref(false)
</script>
