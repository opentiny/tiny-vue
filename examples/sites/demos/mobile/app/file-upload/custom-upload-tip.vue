<template>
  <tiny-file-upload ref="upload" :action="action" accept=".jpg,.png">
    <template #trigger>
      <icon-upload></icon-upload>
    </template>
    <template #tip> 只能上传jpg/png文件，且不超过500kb </template>
  </tiny-file-upload>
</template>

<script lang="jsx">
import { FileUpload } from '@opentiny/vue'
import { iconUpload } from '@opentiny/vue-icon'

export default {
  components: {
    TinyFileUpload: FileUpload,
    IconUpload: iconUpload()
  },
  data() {
    return {
      action: 'http://localhost:3000/api/upload'
    }
  }
}
</script>
