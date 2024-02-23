<template>
  <tiny-button @click="btnClick" :reset-time="0">不显示头部</tiny-button>
</template>

<script setup>
import { Button as TinyButton, Modal } from '@opentiny/vue'

function btnClick() {
  Modal.alert({ message: '不显示头部', showHeader: false })
}
</script>
