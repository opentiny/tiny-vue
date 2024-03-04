<template>
  <div>
    <tiny-button @click="changeVisible">Show Color select panel</tiny-button>
    <tiny-button @click="addPredefineColor">Append predefine color</tiny-button>
    <tiny-button @click="popPredefineColor">Pop predefine color</tiny-button>
    <div style="position: relative">
      <ColorSelectPanel
        v-model="color"
        :visible="visible"
        @confirm="onConfirm"
        @cancel="onCancel"
        :predefine="predefine"
        alpha
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ColorSelectPanel, Button as TinyButton, Notify } from '@opentiny/vue'

const color = ref('#66ccff')
const visible = ref(false)
const changeVisible = () => (visible.value = !visible.value)
const hidden = () => (visible.value = false)
const onConfirm = (msg) => {
  Notify({
    type: 'success',
    position: 'top-right',
    title: '用户点击了选择',
    message: msg
  })
  hidden()
}
const onCancel = () => {
  Notify({
    type: 'error',
    position: 'top-right',
    title: '用户点击了取消'
  })
  hidden()
}
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
</script>
