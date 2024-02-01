<template>
  <tiny-file-upload :data="requestData" ref="uploadRef" :action="action">
    <template #trigger>
      <tiny-button type="primary">点击上传</tiny-button>
    </template>
  </tiny-file-upload>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { FileUpload as TinyFileUpload, Button as TinyButton } from '@opentiny/vue'

const requestData = ref({
  id: 123
})
const action = ref('http://localhost:3000/api/upload')
</script>
