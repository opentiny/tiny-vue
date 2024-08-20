<template>
  <tiny-file-upload
    ref="uploadRef"
    :action="action"
    accept=".jpg,.png"
    re-uploadable
    :file-list="fileList"
    :re-upload-tip="reUploadTip"
  >
    <template #trigger>
      <tiny-button>选取文件</tiny-button>
    </template>
    <template #tip>
      <div class="tiny-upload__tip">只能上传 jpg/png 文件，且不超过500 kb</div>
    </template>
  </tiny-file-upload>
</template>

<script setup>
import { ref } from 'vue'
import { FileUpload as TinyFileUpload, Button as TinyButton } from '@opentiny/vue'

const action = ref('http://localhost:3000/api/upload')
const reUploadTip = (count) => `我是自定义重新上传的左侧提示，${count}个文件变红啦！`
const fileList = ref([
  {
    name: 'test1',
    url: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/fruit.jpg`,
    status: 'success'
  },
  {
    name: '上传中',
    url: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/fruit.jpg`,
    status: 'uploading',
    percentage: 50
  },
  {
    name: 'test2',
    url: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/book.jpg`,
    status: 'fail'
  }
])
</script>
