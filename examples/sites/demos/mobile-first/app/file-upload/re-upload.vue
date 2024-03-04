<template>
  <tiny-file-upload ref="upload" :action="action" :file-list="fileList" @re-upload="handleReUpload"></tiny-file-upload>
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
    handleReUpload() {
      console.log(...arguments)
    }
  }
}
</script>
