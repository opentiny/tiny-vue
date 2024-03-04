<template>
  <tiny-image :src="errUrl" @error="errorHandler"></tiny-image>
  <tiny-image :src="url" @load="loadHandler"></tiny-image>
</template>

<script setup>
import { ref } from 'vue'
import { Image as TinyImage, Modal } from '@opentiny/vue'

const errUrl = ref('')
const url = ref(`${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/mountain.png`)

function errorHandler() {
  Modal.message({ message: '加载失败触发事件', status: 'info' })
}
function loadHandler() {
  Modal.message({ message: '加载成功触发事件', status: 'info' })
}
</script>

<style scoped>
.tiny-image {
  width: 150px;
  height: 100px;
}
</style>
