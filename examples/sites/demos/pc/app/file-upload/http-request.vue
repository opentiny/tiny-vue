<template>
  <tiny-file-upload ref="upload" :http-request="httpRequest" :file-list="fileList" @success="handleSuccess">
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
      httpRequest: ({ onSuccess, file }) => {
        return new Promise((resolve) => {
          // 此处为用户自定义的上传服务请求
          setTimeout(() => {
            onSuccess('上传成功')
            this.fileList.push(file)
          }, 500)
        })
      }
    }
  },
  methods: {
    handleSuccess(res) {
      TinyModal.message(res)
    }
  }
}
</script>
