<template>
  <tiny-file-upload :action="action" accept=".doc,.docx" :file-list="fileList">
    <template #trigger>
      <icon-upload></icon-upload>
    </template>
  </tiny-file-upload>
</template>

<script>
import { FileUpload } from '@opentiny/vue'
import { iconUpload } from '@opentiny/vue-icon'

export default {
  components: {
    TinyFileUpload: FileUpload,
    IconUpload: iconUpload()
  },
  data() {
    return {
      action: '', // 此处可写自定义服务
      fileList: []
    }
  }
}
</script>
