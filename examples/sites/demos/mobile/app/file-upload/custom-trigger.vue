<template>
  <tiny-file-upload ref="upload" :action="action" :header-show="false">
    <template #trigger>
      <tiny-button type="primary">我是触发源</tiny-button>
    </template>
  </tiny-file-upload>
</template>

<script lang="jsx">
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
