<template>
  <tiny-file-upload ref="uploadRef" :http-request="httpRequest" :file-list="fileList" @success="handleSuccess">
    <template #trigger>
      <tiny-button>点击上传</tiny-button>
    </template>
  </tiny-file-upload>
</template>

<script setup>
import { reactive } from 'vue'
import { TinyFileUpload, TinyButton, TinyModal } from '@opentiny/vue'

const fileList = reactive([])
const httpRequest = reactive(({ onSuccess, file }) => {
  return new Promise((resolve) => {
    // 此处为用户自定义的上传服务请求
    setTimeout(() => {
      onSuccess('上传成功')
      this.fileList.push(file)
    }, 500)
  })
})
const handleSuccess = (res) => {
  TinyModal.message(res)
}
</script>
