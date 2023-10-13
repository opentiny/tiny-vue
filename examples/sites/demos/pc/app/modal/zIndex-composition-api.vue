<template>
  <tiny-button @click="btnClick" :reset-time="0">zIndex的值为500</tiny-button>
</template>

<script setup lang="jsx">
import { Button as TinyButton, Modal } from '@opentiny/vue'

function btnClick() {
  Modal.alert({ message: 'zIndex的值为500', zIndex: 500 })
}
</script>
