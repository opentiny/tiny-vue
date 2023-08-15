<template>
  <tiny-file-upload ref="uploadRef" :data="requestData" :before-upload="beforeUpload">
    <template #trigger>
      <tiny-button type="primary">选取文件</tiny-button>
    </template>
  </tiny-file-upload>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { FileUpload as TinyFileUpload, Button as TinyButton } from '@opentiny/vue'
import { message } from '@opentiny/vue-modal'

const requestData = ref({
  id: 123
})

function beforeUpload() {
  message('查看请求头示例请打开浏览器开发者工具 network 的 upload 请求')
  return true
}
</script>
