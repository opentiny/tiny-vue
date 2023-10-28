<template>
  <tiny-button @click="btnClick" :reset-time="0">距离顶部的位置为500</tiny-button>
</template>

<script setup lang="jsx">
import { Button as TinyButton, Modal } from '@opentiny/vue'

function btnClick() {
  Modal.message({ message: '距离顶部的位置为500', top: 500 })
}
</script>
