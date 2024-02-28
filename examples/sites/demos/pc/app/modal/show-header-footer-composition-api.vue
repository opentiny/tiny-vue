<template>
  <tiny-button @click="btnClick" :reset-time="0">控制显示头部及底部</tiny-button>
</template>

<script setup>
import { Button as TinyButton, Modal } from '@opentiny/vue'

function btnClick() {
  Modal.alert({ message: '不显示头部及底部', showHeader: false, showFooter: true })
}
</script>
