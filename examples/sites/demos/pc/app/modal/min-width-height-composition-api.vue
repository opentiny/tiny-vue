<template>
  <tiny-button @click="btnClick" :reset-time="0">最小宽高度</tiny-button>
</template>

<script setup>
import { Button as TinyButton, Modal } from '@opentiny/vue'

function btnClick() {
  Modal.alert({
    message: '提示框拖动最小宽度为700',
    resize: true,
    width: 800,
    height: 400,
    minWidth: 700,
    minHeight: 300
  })
}
</script>
