<template>
  <tiny-file-upload :action="action" :filters="filters">
    <tiny-button type="primary">点击上传</tiny-button>
  </tiny-file-upload>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { FileUpload as TinyFileUpload, Button as TinyButton } from '@opentiny/vue'

const action = ref('http://localhost:3000/api/upload')
const filters = ref({
  max_file_size: '1GB', // 文件大小
  mime_types: [
    {
      // 文件格式，Title可选，为了便于分类。
      title: 'Image files',
      extensions: 'jpg,gif,png'
    },
    {
      title: 'Zip files',
      extensions: 'zip,rar'
    },
    {
      title: 'Doc files',
      extensions: 'doc,docx,xls,xlsx'
    },
    {
      title: 'Video files',
      extensions: 'mkv,mov,mp4,avi'
    }
  ]
})
</script>
