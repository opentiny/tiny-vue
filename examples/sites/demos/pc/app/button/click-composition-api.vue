<template>
  <tiny-button @click="click">默认按钮</tiny-button>
</template>

<script setup>
import { Button as TinyButton, Modal } from '@opentiny/vue'

function click() {
  Modal.message({ message: 'click', status: 'info' })
}
</script>
