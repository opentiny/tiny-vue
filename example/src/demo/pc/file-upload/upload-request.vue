<template>
  <tiny-file-upload ref="upload" :action="action" :file-list="fileList" with-credentials :headers="headers" :before-upload="beforeUpload">
    <template #trigger>
      <tiny-button type="primary">选取文件</tiny-button>
    </template>
  </tiny-file-upload>
</template>

<script>
import { FileUpload, Button } from '@opentiny/vue'
import { message } from '@opentiny/vue-modal'

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
        }
      ],
      headers: {
        'Accept-Language': 'en,zh',
        Authorization: 'Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ=='
      }
    }
  },
  methods: {
    beforeUpload() {
      message('查看请求头示例请打开浏览器开发者工具 network 的 upload 请求')

      return true
    }
  }
}
</script>
