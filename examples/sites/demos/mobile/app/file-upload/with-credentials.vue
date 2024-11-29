<template>
  <tiny-file-upload ref="upload" :action="action" :with-credentials="true" :file-list="fileList">
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
      fileList: [],
      action: ''
    }
  }
}
</script>
