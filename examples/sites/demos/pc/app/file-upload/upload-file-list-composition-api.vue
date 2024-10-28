<template>
  <tiny-file-upload name="fileName" :action="action" show-file-list :file-list="fileList" :open-download-file="true">
    <tiny-button>点击上传</tiny-button>
  </tiny-file-upload>
</template>

<script setup>
import { ref } from 'vue'
import { FileUpload as TinyFileUpload, Button as TinyButton } from '@opentiny/vue'

const action = ref('http://localhost:3000/api/upload')
const fileList = ref([
  {
    name: 'test1',
    url: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/fruit.jpg`
  },
  {
    name: 'test2',
    url: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/book.jpg`
  }
])
</script>
