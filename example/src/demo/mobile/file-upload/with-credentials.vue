<template>
  <tiny-file-upload
    ref="upload"
    :action="action"
    :with-credentials="true"
    :file-list="fileList"
  >
    <template #trigger>
      <tiny-button type="primary">้ๅๆไปถ</tiny-button>
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
      fileList: [],
      action: ''
    }
  }
}
</script>
