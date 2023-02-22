<template>
  <tiny-file-upload name="fileName" :action="action" show-file-list :file-list="fileList" :open-download-file="true">
    <tiny-button type="primary">点击上传</tiny-button>
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
          url: 'static/images/ld.png'
        },
        {
          name: 'test2',
          url: 'static/images/ry.png'
        }
      ]
    }
  }
}
</script>
