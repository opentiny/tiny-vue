<template>
  <tiny-file-upload
    ref="uploadRef"
    :action="action"
    :file-list="fileList"
    :headers="headers"
    :before-upload="beforeUpload"
  >
    <template #trigger>
      <tiny-button type="primary">选取文件</tiny-button>
    </template>
  </tiny-file-upload>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { FileUpload as TinyFileUpload, Button as TinyButton } from '@opentiny/vue'
import { message } from '@opentiny/vue-modal'

const action = ref('http://localhost:3000/api/upload')
const fileList = ref([
  {
    name: 'test1',
    url: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/fruit.jpg`
  }
])
const headers = ref({
  'Accept-Language': 'en,zh',
  Authorization: 'Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ=='
})

function beforeUpload() {
  message('查看请求头示例请打开浏览器开发者工具 network 的 upload 请求')
  return true
}
</script>
