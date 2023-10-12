<template>
  <tiny-file-upload ref="uploadRef" :action="action" accept=".jpg,.png">
    <template #trigger>
      <tiny-button size="small" type="primary">选取文件</tiny-button>
    </template>
    <template #tip>
      <div class="tiny-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </template>
  </tiny-file-upload>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { FileUpload as TinyFileUpload, Button as TinyButton } from '@opentiny/vue'

const action = ref('http://localhost:3000/api/upload')
</script>
