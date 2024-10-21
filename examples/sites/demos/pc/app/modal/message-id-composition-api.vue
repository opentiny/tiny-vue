<template>
  <div>
    <div class="content">
      <tiny-button @click="btnClick">重复点击不出现多个</tiny-button>
    </div>
  </div>
</template>

<script setup>
import { Button as TinyButton, Modal } from '@opentiny/vue'

function btnClick() {
  Modal.confirm({
    status: 'info',
    message: '自定义消息具有唯一 id，所以不会重复出现',
    id: 'unique'
  })
}
</script>

<style scoped>
.content {
  margin: 8px;
}
</style>
