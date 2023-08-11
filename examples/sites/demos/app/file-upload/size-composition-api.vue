<template>
  <tiny-file-upload ref="uploadRef" :action="action">
    <template #trigger>
      <tiny-button type="primary" size="medium">上传</tiny-button>
    </template>
  </tiny-file-upload>
</template>

<script setup>
import { ref } from 'vue'
import { FileUpload as TinyFileUpload, Button as TinyButton } from '@opentiny/vue'

const action = ref('http://localhost:3000/api/upload')
</script>
