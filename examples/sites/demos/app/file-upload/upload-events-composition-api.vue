<template>
  <div>
    <tiny-file-upload
      :action="action"
      @preview="handlePreview"
      @remove="handleRemove"
      @error="errorEvent"
      @exceed="handleExceed"
      @progress="progressEvent"
      @change="handleChange"
      @success="handleAvatarSuccess"
      @hash-progress="handleHashProgress"
      multiple
      :limit="3"
      :file-list="fileList"
    >
      <tiny-button type="primary"> 点击上传 </tiny-button>
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

function handleRemove() {
  message('触发删除文件回调事件')
}

function handlePreview(file) {
  message(file.url)
}

function progressEvent() {
  message('文件上传时的回调 返回进程')
}

function errorEvent() {
  message('文件上传失败回调')
}

function handleExceed() {
  message('触发文件超出个数限制回调事件')
}

function handleAvatarSuccess() {
  message('触发上传文件成功回调事件')
}

function handleChange() {
  message('触发上传文件改变回调事件')
}

function handleHashProgress() {
  message('文件上传生成hash值时的回调 返回进程')
}
</script>
