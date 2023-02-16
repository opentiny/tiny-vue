<template>
  <tiny-file-upload ref="upload" :action="action" :file-list="fileList" disabled>
    <template #trigger>
      <tiny-button type="primary" disabled>选取文件</tiny-button>
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
      action: 'http://localhost:3000/api/upload',
      fileList: [
        {
          name: 'test1',
          url: 'static/images/fruit.jpg'
        }
      ]
    }
  }
}
</script>
