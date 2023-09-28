<template>
  <tiny-image :src="url" @load="loadHandler"></tiny-image>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Image as TinyImage, Modal } from '@opentiny/vue'

const url = ref(`${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/mountain.png`)

function loadHandler() {
  Modal.message({ message: '加载成功触发事件', status: 'info' })
}
</script>
