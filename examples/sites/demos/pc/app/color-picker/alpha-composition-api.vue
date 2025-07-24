<template>
  <tiny-color-picker @confirm="onConfirm" @cancel="onCancel" alpha />
</template>

<script setup>
import { TinyColorPicker, TinyNotify } from '@opentiny/vue'
import { ref } from 'vue'

const color = ref('#66ccff')

/**
 * @param {string} hex #rrggbb
 */
const onConfirm = (hex) => {
  TinyNotify({
    type: 'success',
    position: 'top-right',
    title: '用户点击了选择',
    message: hex
  })
}

const onCancel = () => {
  TinyNotify({
    type: 'warning',
    position: 'top-right',
    title: '用户选择了取消'
  })
}
</script>
