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
      <template #trigger>
        <icon-upload></icon-upload>
      </template>
    </tiny-file-upload>
  </div>
</template>

<script lang="jsx">
import { FileUpload } from '@opentiny/vue'
import { iconUpload } from '@opentiny/vue-icon'

export default {
  components: {
    TinyFileUpload: FileUpload,
    IconUpload: iconUpload()
  },
  data() {
    return {
      action: 'http://localhost:3000/api/upload',
      fileList: [
        {
          name: 'test1',
          url: '/static/images/ld.png'
        },
        {
          name: 'test2',
          url: '/static/images/ry.png'
        }
      ]
    }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log('触发删除文件回调事件')
    },
    handlePreview(file) {
      console.log('文件的链接', file.url)
    },
    progressEvent(file) {
      console.log('文件上传时的回调 返回进程')
    },
    errorEvent(file) {
      console.log('文件上传失败回调')
    },
    handleExceed(files, fileList) {
      console.log('触发文件超出个数限制回调事件')
    },
    handleAvatarSuccess(res, file) {
      console.log('触发上传文件成功回调事件')
    },
    handleChange(res) {
      console.log('触发上传文件改变回调事件')
    }
  }
}
</script>
