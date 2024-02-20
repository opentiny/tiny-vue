<template>
  <tiny-file-upload ref="upload" :action="action" :file-list="fileList" :auto-upload="false">
    <template #trigger>
      <tiny-button type="primary">选取文件</tiny-button>
    </template>
    <tiny-button style="margin-left: 10px" type="success" @click="submitUpload">上传到服务器</tiny-button>
  </tiny-file-upload>
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
      action: 'http://localhost:3000/api/upload',
      fileList: []
    }
  },
  methods: {
    submitUpload() {
      this.$refs.upload.submit()
    }
  }
}
</script>
