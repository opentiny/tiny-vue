<template>
  <tiny-button @click="btnClick" :reset-time="0">提示框最小宽度为700</tiny-button>
</template>

<script setup lang="jsx">
import { Button as TinyButton, Modal } from '@opentiny/vue'

function btnClick() {
  Modal.alert({
    message: '提示框拖动最小宽度为700',
    resize: true,
    minWidth: 700
  })
}
</script>
