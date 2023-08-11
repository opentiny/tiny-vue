<template>
  <div>
    <tiny-file-upload
      size="small"
      :action="action"
      :before-remove="beforeRemove"
      :before-upload="beforeAvatarUpload"
      multiple
      :limit="3"
      :file-list="fileList"
    >
      <tiny-button type="primary">点击上传</tiny-button>
    </tiny-file-upload>
  </div>
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
  },
  {
    name: 'test2',
    url: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/book.jpg`
  }
])

function beforeRemove() {
  message('触发删除文件前回调事件')
  return true
}

function beforeAvatarUpload() {
  message('触发上传前回调事件')
  return true
}
</script>
