<template>
  <div>
    <tiny-file-upload ref="upload" :action="action" display-only></tiny-file-upload>
    <br />
    <br />
    <tiny-file-upload ref="upload" :action="action" :file-list="fileList" display-only></tiny-file-upload>
  </div>
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
        }
      ]
    }
  }
}
</script>
