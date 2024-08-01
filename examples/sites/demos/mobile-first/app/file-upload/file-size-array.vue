<template>
  <tiny-file-upload ref="upload" :action="action" accept=".doc,.docx" :file-list="fileList" :file-size="[100, 200]" />
</template>

<script>
import { FileUpload } from '@opentiny/vue'

export default {
  components: {
    TinyFileUpload: FileUpload
  },
  data() {
    return {
      action: 'http://localhost:3000/api/upload',
      fileList: []
    }
  }
}
</script>
