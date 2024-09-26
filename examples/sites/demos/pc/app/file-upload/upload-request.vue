<template>
  <tiny-file-upload
    ref="upload"
    :action="action"
    :file-list="fileList"
    with-credentials
    :headers="headers"
    :before-upload="beforeUpload"
  >
    <template #trigger>
      <tiny-button>选取文件</tiny-button>
    </template>
  </tiny-file-upload>
</template>

<script>
import { FileUpload, Button, Modal } from '@opentiny/vue'

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
          url: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/fruit.jpg`
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
      Modal.message({ message: '查看请求头示例请打开浏览器开发者工具 network 的 upload 请求', status: 'info' })

      return true
    }
  }
}
</script>
