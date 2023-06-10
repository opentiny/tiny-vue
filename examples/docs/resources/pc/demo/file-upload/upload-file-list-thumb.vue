<template>
  <tiny-file-upload
    action="/"
    name="fileName"
    show-file-list
    :file-list="fileList"
    list-type="thumb"
    :open-download-file="true"
    :thumb-option="options"
  >
    <tiny-button type="primary"> 点击上传 </tiny-button>
  </tiny-file-upload>
</template>

<script lang="jsx">
import { FileUpload, Button } from '@opentiny/vue'

export default {
  components: {
    TinyFileUpload: FileUpload,
    TinyButton: Button
  },
  data() {
    return {
      options: {
        width: 300,
        showDownload: true,
        showDel: true,
        showTooltip: false
      },
      fileList: [
        {
          name: 'test1',
          url: 'static/images/fruit.jpg'
        },
        {
          name: 'test2',
          url: 'static/images/book.jpg'
        }
      ]
    }
  }
}
</script>
