<template>
  <tiny-button @click="click">默认按钮</tiny-button>
</template>

<script setup>
import { TinyButton, TinyModal } from '@opentiny/vue'

function click() {
  TinyModal.message({ message: 'click', status: 'info' })
}
</script>
