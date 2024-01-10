<template>
  <tiny-button @click="btnClick" :reset-time="0">距离顶部的位置为500 px</tiny-button>
</template>

<script setup>
import { Button as TinyButton, Modal } from '@opentiny/vue'

function btnClick() {
  Modal.message({ status: 'info', message: '距离顶部的位置为500 px', top: 500 })
}
</script>
