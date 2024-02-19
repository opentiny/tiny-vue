<template>
  <tiny-button @click="btnClick" :reset-time="0">自定义提示框的内容</tiny-button>
</template>

<script setup lang="jsx">
import { Button as TinyButton, Modal } from '@opentiny/vue'

function btnClick() {
  Modal.alert({ message: () => <div style="color: #fa9841">11111</div> })
}
</script>
