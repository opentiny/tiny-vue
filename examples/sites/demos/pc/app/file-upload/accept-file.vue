<template>
  <tiny-file-upload :action="action" accept=".doc,.docx" :file-list="fileList2">
    <tiny-button type="primary">点击上传</tiny-button>
  </tiny-file-upload>
</template>

<script lang="jsx">
import { FileUpload, Button } from '@opentiny/vue'

export default {
  components: {
    TinyFileUpload: FileUpload,
    TinyButton: Button
  },
  data() {
    return {
      action: 'http://localhost:3000/api/upload',
      fileList: [],
      fileList2: []
    }
  }
}
</script>
