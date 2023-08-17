<template>
  <tiny-file-upload ref="uploadRef" :action="action" :file-list="fileList" :before-remove="beforeRemove">
    <template #trigger>
      <tiny-button type="primary">选取文件</tiny-button>
    </template>
  </tiny-file-upload>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { FileUpload as TinyFileUpload, Button as TinyButton } from '@opentiny/vue'
import { confirm } from '@opentiny/vue-modal'

const action = ref('http://localhost:3000/api/upload')
const fileList = ref([
  {
    name: 'test1',
    url: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/fruit.jpg`
  }
])

function beforeRemove(file) {
  return new Promise((resolve, reject) => {
    confirm(`确定移除 ${file.name}？`).then((res) => {
      res === 'confirm' ? resolve() : reject(new Error())
    })
  })
}
</script>
