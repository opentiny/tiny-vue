<template>
  <tiny-file-upload :data="requestData" ref="upload" :action="action">
    <template #trigger>
      <tiny-button>点击上传</tiny-button>
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
      requestData: {
        id: 123
      },
      action: 'http://localhost:3000/api/upload'
    }
  }
}
</script>
