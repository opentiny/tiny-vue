<template>
  <tiny-button @click="btnClick" :reset-time="0">不显示底部</tiny-button>
</template>

<script setup lang="jsx">
import { Button as TinyButton, Modal } from '@opentiny/vue'

function btnClick() {
  Modal.alert({ message: '不显示底部', showFooter: false })
}
</script>
