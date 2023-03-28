<template>
  <tiny-file-upload ref="upload" :action="action" accept=".jpg,.png">
    <template #trigger>
      <tiny-button size="small" type="primary">选取文件</tiny-button>
    </template>
    <template #tip>
      <div class="tiny-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
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
