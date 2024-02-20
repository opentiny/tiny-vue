<template>
  <tiny-file-upload ref="upload" :action="action" accept=".doc,.docx" :file-list="fileList">
    <template #notice>
      <tiny-alert description="type 为默认值 info都是公示的文件的提示信息"></tiny-alert>
    </template>
  </tiny-file-upload>
</template>

<script>
import { FileUpload, Alert } from '@opentiny/vue'

export default {
  components: {
    TinyAlert: Alert,
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
