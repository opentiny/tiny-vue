<template>
  <tiny-file-upload name="fileName" :action="action" show-file-list :file-list="fileList" :open-download-file="true">
    <tiny-button>点击上传</tiny-button>
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
          url: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/fruit.jpg`
        },
        {
          name: 'test2',
          url: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/book.jpg`
        }
      ]
    }
  }
}
</script>
