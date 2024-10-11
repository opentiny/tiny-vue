<template>
  <tiny-file-upload action="#" disabled>
    <template #trigger>
      <tiny-button>点击上传</tiny-button>
    </template>
  </tiny-file-upload>
</template>

<script>
import { FileUpload, Button } from '@opentiny/vue'

export default {
  components: {
    TinyFileUpload: FileUpload,
    TinyButton: Button
  }
}
</script>
