<template>
  <tiny-file-upload
    accept="image/*"
    ref="uploadRef"
    :action="action"
    :file-list="fileList"
    :before-upload="beforeUpload"
  >
    <template #trigger>
      <tiny-button type="primary">选取文件</tiny-button>
    </template>
    <template #tip>
      <div class="tiny-upload__tip">只允许上传 image 类型文件</div>
    </template>
  </tiny-file-upload>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { FileUpload as TinyFileUpload, Button as TinyButton, Modal } from '@opentiny/vue'

const action = ref('http://localhost:3000/api/upload')
const fileList = ref([])

function beforeUpload(file) {
  let fileReader = new FileReader()

  fileReader.readAsDataURL(file) // 根据图片路径读取图片
  fileReader.onload = function () {
    let base64 = this.result
    let img = document.createElement('img')

    img.src = base64
    img.onload = function () {
      Modal.message({
        message: '宽：' + img.naturalWidth + ' 高：' + img.naturalHeight,
        status: 'info'
      })
    }
  }
}
</script>
