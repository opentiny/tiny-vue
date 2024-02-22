<template>
  <tiny-file-upload :action="action" :file-list="fileList">
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
      fileList: [
        {
          name: 'test1',
          url: '/static/images/ld.png'
        },
        {
          name: 'test2',
          url: '/static/images/ry.png'
        }
      ]
    }
  }
}
</script>
