<template>
  <tiny-file-upload ref="upload" :http-request="httpRequest" :file-list="fileList">
    <template #trigger>
      <tiny-button>点击上传</tiny-button>
    </template>
  </tiny-file-upload>
</template>

<script>
import { TinyFileUpload, TinyButton, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyFileUpload,
    TinyButton
  },
  data() {
    return {
      fileList: [],
      httpRequest: (files) => {
        return new Promise((resolve) => {
          // 此处为用户自定义的上传服务请求
          setTimeout(() => {
            TinyModal.message('上传成功')
            this.fileList.push(files.file)
          }, 500)
        })
      }
    }
  }
}
</script>
