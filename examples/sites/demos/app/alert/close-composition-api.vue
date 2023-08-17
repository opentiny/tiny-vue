<template>
  <tiny-alert description="自定义的 close 事件" @close="close"></tiny-alert>
</template>

<script setup lang="jsx">
import { Alert as TinyAlert, Modal } from '@opentiny/vue'

function close() {
  Modal.message('关闭了')
}
</script>
