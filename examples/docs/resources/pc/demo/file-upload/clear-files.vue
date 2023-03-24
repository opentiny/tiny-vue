<template>
  <div class="content">
    <tiny-file-upload size="small" ref="upload" :action="action" :file-list="fileList">
      <tiny-button type="primary">点击上传</tiny-button>
    </tiny-file-upload>
    <br />
    <tiny-button @click="cancelUpload" type="primary">点击清空上传列表</tiny-button>
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
      action: 'http://localhost:3000/api/upload',
      fileList: [
        {
          name: 'test1',
          url: 'static/images/fruit.jpg'
        },
        {
          name: 'test2',
          url: 'static/images/book.jpg'
        }
      ]
    }
  },
  methods: {
    cancelUpload() {
      this.$refs.upload.clearFiles()
    }
  }
}
</script>
