<template>
  <tiny-button @click="btnClick" :reset-time="0">不锁住滚动条不要遮罩层</tiny-button>
</template>

<script setup lang="jsx">
import { Button as TinyButton, Modal } from '@opentiny/vue'

function btnClick() {
  const str = '不锁住滚动条不要遮罩层。  '
  Modal.alert({
    message: str.repeat(100),
    lockScroll: false,
    mask: false
  })
}
</script>
