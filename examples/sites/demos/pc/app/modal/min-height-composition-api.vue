<template>
  <tiny-button @click="btnClick" :reset-time="0">提示框最小高度为300</tiny-button>
</template>

<script setup lang="jsx">
import { Button as TinyButton, Modal } from '@opentiny/vue'

function btnClick() {
  Modal.alert({
    message: '提示框拖动最小高度为300',
    resize: true,
    minHeight: 300
  })
}
</script>
