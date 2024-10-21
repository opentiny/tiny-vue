<template>
  <div>
    <div class="content">
      <tiny-button @click="btnClick">消息可关闭</tiny-button>
    </div>
  </div>
</template>

<script setup>
import { Button as TinyButton, Modal } from '@opentiny/vue'

function btnClick() {
  Modal.confirm({
    status: 'info',
    message: '自定义消息的内容可关闭,5s 后得自动关闭',
    messageClosable: true,
    duration: 5000
  })
}
</script>

<style scoped>
.content {
  margin: 8px;
}
</style>
