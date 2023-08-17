<template>
  <tiny-file-upload ref="uploadRef" :http-request="httpRequest">
    <template #trigger>
      <tiny-button type="primary">点击上传</tiny-button>
    </template>
  </tiny-file-upload>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { FileUpload as TinyFileUpload, Button as TinyButton, Modal } from '@opentiny/vue'

const httpRequest = ref(() => {
  return new Promise((resolve) => {
    // 此处为用户自定义的上传服务请求
    setTimeout(() => {
      Modal.message('上传成功')
    }, 500)
  })
})
</script>
