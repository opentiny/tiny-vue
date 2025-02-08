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
      multiple
      :limit="3"
      :file-list="fileList"
    >
      <template #trigger>
        <tiny-icon-upload></tiny-icon-upload>
      </template>
    </tiny-file-upload>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyFileUpload } from '@opentiny/vue-mobile'
import { iconUpload } from '@opentiny/vue-icon'

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
const TinyIconUpload = iconUpload()

function handleRemove(file, fileList) {
  // NISVUE3 FIXME: fileList重复定义，请手工修改
  console.log('触发删除文件回调事件')
}

function handlePreview(file) {
  console.log('文件的链接', file.url)
}

function progressEvent(file) {
  console.log('文件上传时的回调 返回进程')
}

function errorEvent(file) {
  console.log('文件上传失败回调')
}

function handleExceed(files, fileList) {
  // NISVUE3 FIXME: fileList重复定义，请手工修改
  console.log('触发文件超出个数限制回调事件')
}

function handleAvatarSuccess(res, file) {
  console.log('触发上传文件成功回调事件')
}

function handleChange(res) {
  console.log('触发上传文件改变回调事件')
}
</script>
