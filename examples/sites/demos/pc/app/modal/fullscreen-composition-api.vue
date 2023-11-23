<template>
  <tiny-button @click="btnClick" :reset-time="0">最大化显示</tiny-button>
</template>

<script setup>
import { Button as TinyButton, Modal } from '@opentiny/vue'

function btnClick() {
  Modal.alert({ message: '最大化显示', fullscreen: true })
}
</script>
