<template>
  <tiny-file-upload ref="uploadRef" :action="action" accept=".jpg,.png">
    <template #trigger>
      <tiny-icon-upload></tiny-icon-upload>
    </template>
    <template #tip> 只能上传 jpg/png 文件，且不超过500 kb </template>
  </tiny-file-upload>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyFileUpload } from '@opentiny/vue-mobile'
import { iconUpload } from '@opentiny/vue-icon'

const action = ref('http://localhost:3000/api/upload')
const TinyIconUpload = iconUpload()
</script>
