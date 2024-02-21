<template>
  <tiny-button @click="btnClick" :reset-time="0">z-index 的值为500</tiny-button>
</template>

<script setup>
import { Button as TinyButton, Modal } from '@opentiny/vue'

function btnClick() {
  Modal.alert({ message: 'z-index 的值为500', zIndex: 500 })
}
</script>
