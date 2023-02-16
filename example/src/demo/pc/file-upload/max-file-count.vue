<template>
  <tiny-file-upload :action="action" :limit="limit">
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
      limit: 1
    }
  }
}
</script>
