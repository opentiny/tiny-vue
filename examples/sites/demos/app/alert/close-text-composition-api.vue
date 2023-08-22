<template>
  <div>
    <tiny-alert description="默认关闭按钮"></tiny-alert>
    <tiny-alert description="关闭按钮自定义文本" close-text="关闭" @close="close"></tiny-alert>
  </div>
</template>

<script setup lang="jsx">
import { Alert as TinyAlert, Modal } from '@opentiny/vue'

function close() {
  Modal.alert('关闭了')
}
</script>
