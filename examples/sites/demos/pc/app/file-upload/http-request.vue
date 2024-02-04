<template>
  <tiny-file-upload ref="upload" :http-request="httpRequest">
    <template #trigger>
      <tiny-button type="primary">点击上传</tiny-button>
    </template>
  </tiny-file-upload>
</template>

<script>
import { FileUpload, Button, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyFileUpload: FileUpload,
    TinyButton: Button
  },
  data() {
    return {
      httpRequest: () => {
        return new Promise((resolve) => {
          // 此处为用户自定义的上传服务请求
          setTimeout(() => {
            Modal.message('上传成功')
          }, 500)
        })
      }
    }
  }
}
</script>
