<template>
  <div>
    <tiny-file-upload accept="image/*" :file-list="fileList">
      <tiny-button type="primary">点击上传</tiny-button>
      <template #tip>
        <div class="tiny-upload__tip">只允许上传 image 类型文件</div>
      </template>
    </tiny-file-upload>
    <br /><br />
    <tiny-file-upload accept=".doc,.docx" :file-list="fileList2">
      <tiny-button type="primary">点击上传</tiny-button>
      <template #tip>
        <div class="tiny-upload__tip">只允许上传 .doc,.docx 类型文件</div>
      </template>
    </tiny-file-upload>
  </div>
</template>

<script>
import { FileUpload, Button } from '@opentiny/vue'

export default {
  components: {
    TinyFileUpload: FileUpload,
    TinyButton: Button
  },
  data() {
    return {
      fileList: [],
      fileList2: []
    }
  }
}
</script>
