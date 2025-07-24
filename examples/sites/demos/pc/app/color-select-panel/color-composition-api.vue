<template>
  <div>
    <tiny-button @click="changeVisible">Show Color select panel</tiny-button>
    <div style="position: relative">
      <tiny-color-select-panel
        v-model="color"
        :visible="visible"
        @color-update="onColorUpdate"
        @confirm="onConfirm"
        @cancel="hidden"
      />
    </div>
  </div>
</template>

<script setup>
import { TinyColorSelectPanel, TinyButton, TinyNotify } from '@opentiny/vue'
import { ref } from 'vue'

const color = ref('#66ccff')
const visible = ref(false)
const changeVisible = () => {
  visible.value = !visible.value
}
const hidden = () => {
  visible.value = false
}
const onConfirm = () => {
  hidden()
}
const onColorUpdate = () => {
  TinyNotify({
    type: 'success',
    position: 'top-right',
    title: '用户更改了颜色'
  })
}
</script>
