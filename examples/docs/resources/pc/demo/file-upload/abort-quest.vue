<template>
  <div class="content">
    <tiny-file-upload ref="upload" :action="action">
      <tiny-button size="small" type="primary">点击上传</tiny-button>
    </tiny-file-upload>
    <br />
    <tiny-button @click="cancelUpload">取消上传</tiny-button>
  </div>
</template>

<script lang="jsx">
import { FileUpload, Button } from '@opentiny/vue'

export default {
  components: {
    TinyFileUpload: FileUpload,
    TinyButton: Button
  },
  data() {
    return {
      action: 'http://localhost:3000/api/upload'
    }
  },
  methods: {
    cancelUpload() {
      this.$refs.upload.abort()
    }
  }
}
</script>
