<template>
  <tiny-image :src="url1" @error="errorHandler"></tiny-image>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Image as TinyImage, Modal } from '@opentiny/vue'

const url1 = ref('')

function errorHandler() {
  Modal.message({ message: '加载失败触发事件', status: 'info' })
}
</script>
