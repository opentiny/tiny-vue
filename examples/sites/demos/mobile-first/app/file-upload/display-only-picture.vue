<template>
  <div>
    <tiny-file-upload :action="action" list-type="picture-single" :file-list="fileList1" display-only>
    </tiny-file-upload>
    <br />
    <br />
    <tiny-file-upload :action="action" list-type="picture-card" :file-list="fileList2" display-only> </tiny-file-upload>
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
          name: 'Snipaste_2022-12-02_18-05-51.png',
          url: '/static/images/ld.png'
        }
      ],
      fileList2: [
        {
          name: 'test1.png',
          url: '/static/images/ld.png',
          status: 'uploading',
          percentage: '50'
        },
        {
          name: 'test2',
          url: '/static/images/ry.png'
        },
        {
          name: 'test3',
          url: '/static/images/ld.png',
          status: 'fail'
        }
      ]
    }
  }
}
</script>
