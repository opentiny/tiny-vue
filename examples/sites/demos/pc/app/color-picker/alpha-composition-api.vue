<template>
  <tiny-color-picker @confirm="onConfirm" @cancel="onCancel" alpha />
</template>

<script setup>
import { ColorPicker as TinyColorPicker, Notify } from '@opentiny/vue'
import { ref } from 'vue'

const color = ref('#66ccff')

/**
 * @param {string} hex #rrggbb
 */
const onConfirm = (hex) => {
  Notify({
    type: 'success',
    position: 'top-right',
    title: '用户点击了选择',
    message: hex
  })
}

const onCancel = () => {
  Notify({
    type: 'warning',
    position: 'top-right',
    title: '用户选择了取消'
  })
}
</script>
