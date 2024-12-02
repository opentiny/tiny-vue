<template>
  <tiny-file-upload ref="upload" :action="action" :file-list="fileList" :header-show="false">
    <template #trigger>
      <tiny-button type="primary">选取文件</tiny-button>
    </template>
  </tiny-file-upload>
</template>

<script lang="jsx">
import { TinyFileUpload, TinyButton } from '@opentiny/vue-mobile'

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
