<template>
  <tiny-button @click="btnClick" :reset-time="0">点击遮罩层可以关闭</tiny-button>
</template>

<script setup>
import { Button as TinyButton, Modal } from '@opentiny/vue'

function btnClick() {
  Modal.alert({ message: '点击遮罩层可以关闭', maskClosable: true })
}
</script>
