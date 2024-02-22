<template>
  <tiny-file-upload ref="uploadRef" :action="action" :file-list="fileList" :before-upload="beforeAvatarUpload">
    <template #trigger>
      <tiny-button type="primary">选取文件</tiny-button>
    </template>
  </tiny-file-upload>
</template>

<script setup>
import { ref } from 'vue'
import { FileUpload as TinyFileUpload, Button as TinyButton, Modal } from '@opentiny/vue'

const action = ref('http://localhost:3000/api/upload')
const fileList = ref([
  {
    name: 'test1',
    url: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/fruit.jpg`
  }
])

function beforeAvatarUpload(file) {
  return new Promise((resolve, reject) => {
    const isJPG = file.type === 'image/jpeg'
    const isLt2M = file.size / 1024 / 1024 < 2
    const allow = isJPG && isLt2M

    if (!allow) {
      Modal.confirm(`自定义提示：《${file.name}》文件不合规范，文件类型或大小超出限制，确定要上传吗？`).then((res) => {
        res === 'confirm' ? resolve() : reject(new Error('取消上传'))
      })
    } else {
      resolve()
    }
  })
}
</script>
