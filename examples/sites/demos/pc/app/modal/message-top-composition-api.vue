<template>
  <div>
    <div class="content">
      <tiny-button @click="btnClick">消息距离顶部500px</tiny-button>
    </div>
  </div>
</template>

<script setup>
import { Button as TinyButton, Modal } from '@opentiny/vue'

function btnClick() {
  Modal.confirm({
    status: 'info',
    message: '自定义消息的内容距离顶部500px',
    top: 500
  })
}
</script>

<style scoped>
.content {
  margin: 8px;
}
</style>
