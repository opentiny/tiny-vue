<template>
  <tiny-button @click="btnClick" :reset-time="0">不锁界面不要遮罩层</tiny-button>
</template>

<script setup lang="jsx">
import { Button as TinyButton, Modal } from '@opentiny/vue'

function btnClick() {
  Modal.alert({
    message: '不锁界面不要遮罩层',
    lockView: false,
    mask: false
  })
}
</script>
