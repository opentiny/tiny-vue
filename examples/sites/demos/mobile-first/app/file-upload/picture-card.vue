<template>
  <tiny-file-upload :action="action" :file-list="fileList" list-type="picture-card"> </tiny-file-upload>
</template>

<script>
import { FileUpload, DialogBox } from '@opentiny/vue'
import { IconPlus } from '@opentiny/vue-icon'

export default {
  components: {
    TinyFileUpload: FileUpload,
    TinyDialogBox: DialogBox,
    IconPlus: IconPlus()
  },
  data() {
    return {
      action: 'http://localhost:3000/api/upload',
      fileList: [
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
