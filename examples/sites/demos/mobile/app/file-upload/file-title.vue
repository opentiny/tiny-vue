<template>
  <tiny-file-upload ref="upload" :action="action" :file-list="fileList" file-title="我是标题">
    <template #trigger>
      <icon-upload></icon-upload>
    </template>
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
      action: 'http://localhost:3000/api/upload',
      fileList: []
    }
  }
}
</script>
