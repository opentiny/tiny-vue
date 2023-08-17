<template>
  <tiny-button @click="btnClick" :reset-time="0">按 Esc 键可以关闭弹出框</tiny-button>
</template>

<script setup lang="jsx">
import { Button as TinyButton, Modal } from '@opentiny/vue'

function btnClick() {
  Modal.alert({ message: '按 Esc 键可以关闭', escClosable: true })
}
</script>
