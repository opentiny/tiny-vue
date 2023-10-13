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

<script lang="jsx">
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
      Modal.message('触发删除文件回调事件')
    },
    handlePreview(file) {
      Modal.message(file.url)
    },
    progressEvent() {
      Modal.message('文件上传时的回调 返回进程')
    },
    errorEvent() {
      Modal.message('文件上传失败回调')
    },
    handleExceed() {
      Modal.message('触发文件超出个数限制回调事件')
    },
    handleAvatarSuccess() {
      Modal.message('触发上传文件成功回调事件')
    },
    handleChange() {
      Modal.message('触发上传文件改变回调事件')
    },
    handleHashProgress() {
      Modal.message('文件上传生成hash值时的回调 返回进程')
    }
  }
}
</script>
