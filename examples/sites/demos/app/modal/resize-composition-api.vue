<template>
  <tiny-button @click="btnClick" :reset-time="0">可以拖动调整窗口大小</tiny-button>
</template>

<script setup lang="jsx">
import { Button as TinyButton, Modal } from '@opentiny/vue'

function btnClick() {
  Modal.alert({
    message: '可以拖动调整窗口大小',
    resize: true,
    height: 188,
    width: 366
  })
}
</script>
