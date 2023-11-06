<template>
  <tiny-file-upload name="fileName" :action="action" show-file-list :file-list="fileList">
    <tiny-button type="primary">点击上传</tiny-button>
    <template #file="data">
      <div>{{ data.file.name }}</div>
    </template>
  </tiny-file-upload>
</template>

<script setup>
import { ref } from 'vue'
import { FileUpload as TinyFileUpload, Button as TinyButton } from '@opentiny/vue'

const action = ref('http://localhost:3000/api/upload')
const fileList = ref([
  {
    name: 'test1',
    url: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/ld.png`
  },
  {
    name: 'test2',
    url: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/ry.png`
  }
])
</script>
