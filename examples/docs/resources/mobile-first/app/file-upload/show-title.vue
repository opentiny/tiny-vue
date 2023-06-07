<template>
  <tiny-file-upload ref="upload" :show-title="false" :action="action" :file-list="fileList" />
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
      fileList: []
    }
  }
}
</script>
