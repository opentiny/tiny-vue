<template>
  <tiny-file-upload ref="uploadRef" :action="action">
    <template #trigger>
      <tiny-button type="primary">我是触发源</tiny-button>
    </template>
  </tiny-file-upload>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { FileUpload as TinyFileUpload, Button as TinyButton } from '@opentiny/vue'

const action = ref('http://localhost:3000/api/upload')
</script>
