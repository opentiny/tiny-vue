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
import { TinyPopUpload, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyPopUpload
  },
  data() {
    return {
      action: 'http://localhost:3000/api/upload'
    }
  },
  methods: {
    handleRemove() {
      TinyModal.message('触发删除文件回调事件')
    },
    handleProgress() {
      TinyModal.message('文件上传时的回调 返回进程')
    },
    handleError() {
      TinyModal.message('文件上传失败回调')
    },
    handleExceed() {
      TinyModal.message('触发文件超出个数限制回调事件')
    },
    handleSuccess() {
      TinyModal.message('触发上传文件成功回调事件')
    }
  }
}
</script>
