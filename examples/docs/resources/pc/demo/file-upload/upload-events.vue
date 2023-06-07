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
      multiple
      :limit="3"
      :file-list="fileList"
    >
      <tiny-button type="primary"> 点击上传 </tiny-button>
    </tiny-file-upload>
  </div>
</template>

<script lang="jsx">
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
        },
        {
          name: 'test2',
          url: 'static/images/book.jpg'
        }
      ]
    }
  },
  methods: {
    handleRemove() {
      message('触发删除文件回调事件')
    },
    handlePreview(file) {
      message(file.url)
    },
    progressEvent() {
      message('文件上传时的回调 返回进程')
    },
    errorEvent() {
      message('文件上传失败回调')
    },
    handleExceed() {
      message('触发文件超出个数限制回调事件')
    },
    handleAvatarSuccess() {
      message('触发上传文件成功回调事件')
    },
    handleChange() {
      message('触发上传文件改变回调事件')
    }
  }
}
</script>
