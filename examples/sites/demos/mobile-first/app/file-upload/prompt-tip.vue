<template>
  <div style="height: 540px">
    <tiny-file-upload
      ref="upload"
      prompt-tip
      :action="action"
      accept=".doc,.docx"
      :file-list="fileList"
      list-type="saas"
      :file-size="[100, 200]"
    />
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
        },
        {
          docId: 'M1T2A1N548572512085860352',
          path: 'edm/one/',
          docVersion: 'V1',
          name: 'test2.doc',
          docSize: 17252 * 1024,
          size: 17252 * 1024,
          serverName: 'ShenZhen'
        },
        {
          docId: 'M1T2A1N548572512085860353',
          path: 'edm/one/',
          docVersion: 'V1',
          name: 'test3.png',
          docSize: 200 * 1024,
          size: 200 * 1024,
          serverName: 'ShenZhen',
          status: 'uploading',
          percentage: 30
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
        },
        {
          docId: 'M1T2A1N548572512085860353',
          path: 'edm/one/',
          docVersion: 'V1',
          name: 'test5超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长.doc',
          docSize: 17252 * 1024,
          size: 17252 * 1024,
          serverName: 'ShenZhen'
        },
        {
          docId: 'M1T2A1N548572512085860353',
          path: 'edm/one/',
          docVersion: 'V1',
          name: '没有文件大小.doc',
          serverName: 'ShenZhen'
        }
      ]
    }
  }
}
</script>
