<template>
  <tiny-file-upload ref="uploadRef" :http-request="httpRequest" :file-list="fileList">
    <template #trigger>
      <tiny-button type="primary">点击上传</tiny-button>
    </template>
  </tiny-file-upload>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { FileUpload as TinyFileUpload, Button as TinyButton, Modal } from '@opentiny/vue'

const fileList = reactive([])
const httpRequest = ref((files) => {
  return new Promise((resolve) => {
    // 此处为用户自定义的上传服务请求
    setTimeout(() => {
      Modal.message('上传成功')
      fileList.push(files.file)
    }, 500)
  })
})
</script>
