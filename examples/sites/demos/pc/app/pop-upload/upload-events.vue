<template>
  <tiny-pop-upload
    :action="action"
    multiple
    :limit="2"
    @remove="handleRemove"
    @error="handleError"
    @exceed="handleExceed"
    @progress="handleProgress"
    @success="handleSuccess"
  ></tiny-pop-upload>
</template>

<script lang="jsx">
import { PopUpload, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyPopUpload: PopUpload
  },
  data() {
    return {
      action: 'http://localhost:3000/api/upload'
    }
  },
  methods: {
    handleRemove() {
      Modal.message('触发删除文件回调事件')
    },
    handleProgress() {
      Modal.message('文件上传时的回调 返回进程')
    },
    handleError() {
      Modal.message('文件上传失败回调')
    },
    handleExceed() {
      Modal.message('触发文件超出个数限制回调事件')
    },
    handleSuccess() {
      Modal.message('触发上传文件成功回调事件')
    }
  }
}
</script>
