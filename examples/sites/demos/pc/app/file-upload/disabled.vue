<template>
  <tiny-file-upload action="#" disabled>
    <template #trigger>
      <tiny-button disabled>点击上传</tiny-button>
    </template>
  </tiny-file-upload>
</template>

<script>
import { TinyFileUpload, TinyButton } from '@opentiny/vue'

export default {
  components: {
    TinyFileUpload,
    TinyButton
  }
}
</script>
