<template>
  <tiny-file-upload ref="upload" :show-title="false" :action="action" :file-list="fileList">
    <template #assist-content>assist-content</template>
  </tiny-file-upload>
</template>

<script>
import { FileUpload, Button } from '@opentiny/vue'

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
