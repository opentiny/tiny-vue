<template>
  <tiny-file-upload accept="image/*" :file-list="fileList">
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
      fileList: []
    }
  }
}
</script>
