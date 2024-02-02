<template>
  <div>
    <tiny-file-upload
      :action="action"
      @preview="handlePreview"
      @remove="handleRemove"
      @error="errorEvent"
      @exceed="handleExceed"
      @progress="progressEvent"
      @change="handleChange"
      @success="handleAvatarSuccess"
      @hash-progress="handleHashProgress"
      multiple
      :limit="3"
      :file-list="fileList"
    >
      <tiny-button type="primary"> 点击上传 </tiny-button>
    </tiny-file-upload>
  </div>
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
        },
        {
          name: 'test2',
          url: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/book.jpg`
        }
      ]
    }
  },
  methods: {
    handleRemove() {
      Modal.message({ message: '触发删除文件回调事件', status: 'info' })
    },
    handlePreview(file) {
      Modal.message({ message: file.url, status: 'info' })
    },
    progressEvent() {
      Modal.message({ message: '文件上传时的回调 返回进程', status: 'loading' })
    },
    errorEvent() {
      Modal.message({ message: '文件上传失败回调', status: 'error' })
    },
    handleExceed() {
      Modal.message({ message: '触发文件超出个数限制回调事件', status: 'warning' })
    },
    handleAvatarSuccess() {
      Modal.message({ message: '触发上传文件成功回调事件', status: 'success' })
    },
    handleChange() {
      Modal.message({ message: '触发上传文件改变回调事件', status: 'info' })
    },
    handleHashProgress() {
      Modal.message({ message: '文件上传生成hash值时的回调 返回进程', status: 'info' })
    }
  }
}
</script>
