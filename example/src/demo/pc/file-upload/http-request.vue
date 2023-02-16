<template>
  <tiny-file-upload ref="upload" :http-request="httpRequest">
    <template #trigger>
      <tiny-button type="primary">点击上传</tiny-button>
    </template>
  </tiny-file-upload>
</template>

<script>
import { FileUpload, Button } from '@opentiny/vue'

export default {
  components: {
    TinyFileUpload: FileUpload,
    TinyButton: Button
  },
  data() {
    return {
      httpRequest: () =>
        new Promise((resolve) => {
          // 此处服务为 自定义上传服务
        })
    }
  }
}
</script>
