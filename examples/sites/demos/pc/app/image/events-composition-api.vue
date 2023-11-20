<template>
  <tiny-image :src="url1" @load="loadHandler" @error="errorHandler"></tiny-image>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Image as TinyImage, Modal } from '@opentiny/vue'

const url1 = ref('')

function errorHandler() {
  Modal.message({ message: '加载失败触发事件', status: 'info' })
}
function loadHandler() {
  Modal.message({ message: '加载成功触发事件', status: 'info' })
}
</script>
