<template>
  <tiny-file-upload ref="upload" title="自定义title" :action="action" :file-list="fileList" />
</template>

<script>
import { TinyFileUpload, TinyButton } from '@opentiny/vue'

export default {
  components: {
    TinyFileUpload,
    TinyButton
  },
  data() {
    return {
      action: 'http://localhost:3000/api/upload',
      fileList: []
    }
  }
}
</script>
