<template>
  <div>
    <p>上传中</p>
    <tiny-file-upload :action="action" :file-list="fileList1" list-type="drag-single"> </tiny-file-upload>
    <br />
    <br />
    <p>上传成功</p>
    <tiny-file-upload :action="action" :file-list="fileList2" list-type="drag-single"> </tiny-file-upload>
    <br />
    <br />
    <p>上传失败</p>
    <tiny-file-upload :action="action" :file-list="fileList3" list-type="drag-single"> </tiny-file-upload>
    <br />
    <br />
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
      fileList1: [
        {
          name: 'ld.png',
          url: 'webnova/static/images/ld.png',
          status: 'uploading',
          percentage: 30
        }
      ],
      fileList2: [
        {
          name: 'ld.png',
          url: 'webnova/static/images/ld.png'
        }
      ],
      fileList3: [
        {
          name: 'ld.png',
          url: 'webnova/static/images/ld.png',
          status: 'fail'
        }
      ]
    }
  }
}
</script>
