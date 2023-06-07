<template>
  <tiny-file-upload ref="upload" :action="action" :file-list="fileList" @trigger-click="handleTriggerClick" @preview="handlePreview" @download-file="handleDownloadFile" @download-all="handleDownloadAll" @re-upload="handleReUpload" @click-file-list="handleClickFileList" @remove="handleRemove"></tiny-file-upload>
</template>

<script>
import { FileUpload } from '@opentiny/vue'

export default {
  components: {
    TinyFileUpload: FileUpload
  },
  data() {
    return {
      action: 'http://localhost:3000/api/upload',
      fileList: [
        {
          docId: 'M1T2A1N548572512085860351',
          path: 'edm/one/',
          docVersion: 'V1',
          name: 'test1.png',
          docSize: 100 * 1024,
          size: 100 * 1024,
          serverName: 'ShenZhen'
        },
        {
          docId: 'M1T2A1N548572512085860353',
          path: 'edm/one/',
          docVersion: 'V1',
          name: 'test4.doc',
          docSize: 17252 * 1024,
          size: 17252 * 1024,
          serverName: 'ShenZhen',
          status: 'fail',
          percentage: 30
        }
      ]
    }
  },
  methods: {
    handleTriggerClick() {
      console.log('trigger-click', ...arguments)
    },
    handlePreview() {
      console.log('preview', ...arguments)
    },
    handleDownloadFile() {
      console.log('download-file', ...arguments)
    },
    handleDownloadAll() {
      console.log('download-all', ...arguments)
    },
    handleReUpload() {
      console.log('re-upload', ...arguments)
    },
    handleClickFileList() {
      console.log('click-file-list', ...arguments)
    },
    handleRemove() {
      console.log('remove', ...arguments)
    }
  }
}
</script>
