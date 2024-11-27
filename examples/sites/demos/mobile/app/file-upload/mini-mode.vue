<template>
  <tiny-file-upload ref="upload" :action="action" :file-list="fileList" :mini-mode="true">
    <template #trigger>
      <icon-upload></icon-upload>
    </template>
  </tiny-file-upload>
</template>

<script lang="jsx">
import { TinyFileUpload } from '@opentiny/vue-mobile'
import { iconUpload } from '@opentiny/vue-icon'

export default {
  components: {
    TinyFileUpload,
    IconUpload: iconUpload()
  },
  data() {
    return {
      action: '',
      fileList: [
        {
          name: 'test1',
          url: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/ld.png`
        }
      ]
    }
  }
}
</script>
