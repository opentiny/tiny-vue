<template>
  <tiny-file-upload ref="upload" :action="action" :file-list="fileList" :before-upload="beforeUpload">
    <template #trigger>
      <tiny-button type="primary">选取文件</tiny-button>
    </template>
  </tiny-file-upload>
</template>

<script>
import { FileUpload, Button } from '@opentiny/vue'
import { confirm } from '@opentiny/vue-modal'

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
          url: 'static/images/1.jpg'
        }
      ]
    }
  },
  methods: {
    beforeUpload(file) {
      return new Promise((resolve, reject) => {
        confirm(`确定要上传 ${file.name}？`).then((res) => {
          res === 'confirm' ? resolve() : reject()
        })
      })
    }
  }
}
</script>
