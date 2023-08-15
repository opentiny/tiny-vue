<template>
  <tiny-file-upload ref="upload" :action="action">
    <template #trigger>
      <tiny-button type="primary" size="medium">上传</tiny-button>
    </template>
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
      action: 'http://localhost:3000/api/upload'
    }
  }
}
</script>
