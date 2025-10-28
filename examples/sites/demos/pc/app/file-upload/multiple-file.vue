<template>
  <tiny-file-upload :action="action" :multiple="true">
    <template #trigger>
      <tiny-button>点击上传</tiny-button>
    </template>
  </tiny-file-upload>
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
      action: 'http://localhost:3000/api/upload'
    }
  }
}
</script>
