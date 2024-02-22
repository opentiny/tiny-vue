<template>
  <tiny-file-upload :action="action" accept="image/*" :file-list="fileList">
    <tiny-button type="primary">点击上传</tiny-button>
  </tiny-file-upload>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { FileUpload as TinyFileUpload, Button as TinyButton } from '@opentiny/vue'

const action = ref('http://localhost:3000/api/upload')
const fileList = ref([])
</script>
