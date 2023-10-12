<template>
  <tiny-file-upload ref="upload" :show-title="false" :action="action" :file-list="fileList">
    <template #operate="{ file }">
      <div class="h-[3.75rem] leading-[3.75rem] cursor-pointer text-center sm:h-auto sm:leading-[initial]">
        <span v-if="file.docId === 'M1T2A1N548572512085860351'" class="sm:mr-2">下载</span>
        <span>删除</span>
      </div>
    </template>
  </tiny-file-upload>
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
          name: 'test2.png',
          docSize: 100 * 1024,
          size: 100 * 1024,
          serverName: 'ShenZhen'
        }
      ]
    }
  }
}
</script>
