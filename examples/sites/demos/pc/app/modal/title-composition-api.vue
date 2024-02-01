<template>
  <tiny-button @click="btnClick" :reset-time="0">自定义标题</tiny-button>
</template>

<script setup>
import { Button as TinyButton, Modal } from '@opentiny/vue'

function btnClick() {
  Modal.alert({ message: '自定义标题', title: '自定义标题' })
}
</script>
